import React,{useState,useEffect} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {Button} from 'react-bootstrap'



const NoteUpdatePage = () => {

 const [formData,setFormData] = useState({title:"", description:""})

  const {id} = useParams();
  const navigate = useNavigate();
  
  //fetching the data 
  const fetchData =async()=>{
    try{

      const {data} = await axios.get(`http://127.0.0.1:8000/api/detail/${id}`);
      setFormData({
        title:data.title || "",
        description:data.description || ""
      })
    }
    catch(error){
      console.log("error fetching data: ", error);
    }
  }


  useEffect(()=>{
    fetchData();
  },[])
  
// updating the data 
 const handleChange=(e)=>{
    const {name,value} =e.target;
    setFormData({...formData,[name]:value});
    console.log(name)
  };

  const submitData = async (e)=>{
    e.preventDefault();

    try{
      const response = await axios.put(`http://127.0.0.1:8000/api/detail/${id}`,formData);
      toast.success("data updated successfully");
      navigate('/');
      // lets clear the form data
      // setFormData({name:"",price:"", description:"",category:""});
    


    }catch(error){
      console.error("error updating the data: ", error);
    }

  }


  return (
    <div>
        <h3>product update page</h3>
        <form  onSubmit={submitData}>
              <div className='form-group'>
                  <input 
                  type='text'
                  className='form-control form-control-lg mb-3'
                  placeholder='enter note title'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                />

              </div>
          
          <div className='form-group'>
            <input 
                  type='text'
                  className='form-control form-control-lg mb-3'
                  placeholder='enter note description'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  />
          </div>
            <button type='submit' className='btn btn-primary'>submit</button>       
         </form>
    </div>
  )
}

export default NoteUpdatePage