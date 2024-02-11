import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const NoteAdd = () => {

// const [loading,setLoading] = useState(false)

const navigate = useNavigate();


  //  using useForm from react-hook-form 
const form = useForm({
  defaultValues: {
    title: "",
    description: ""
  }
})



const onSubmit =async(values)=>{

  const response = await axios.post('http://127.0.0.1:8000/api/',values)
  if (response.status===200){

    toast.success('data submitted successfully')
    navigate("/");
  }
  // try{
  //   setLoading(true);
  //   console.log(values);6
  //   toast.success("success")
    
  // }catch(error){
  //   toast.error('sth is wrong')
  // }finally{
  //   setLoading(false)
  // }
  
 
}



  return (
   <div className='main-div'>
    <h3 className='h3-text'>Add your notes here!</h3>
    <hr className='line-breaker'></hr>
      <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='form-group'>
                    <input 
                    type='text'
                    className='form-control form-control-lg mb-3'
                    placeholder='enter title of your note'   
                   {...form.register("title")}
            
                    
                  />

              </div>
               <div className='form-group'>
                    <input 
                    type='text'
                    className='form-control form-control-lg mb-3'
                    placeholder='enter description here'
                  {...form.register("description")}
                    
                    
                  />

              </div>
              <Button type='submit' className='btn-add fs-3 fst-italic fw-bold' variant="secondary"> ADD</Button>
      </form>
   
   </div>
  )
}

export default NoteAdd