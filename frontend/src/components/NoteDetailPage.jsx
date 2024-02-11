import React, {useState,useEffect}from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import toast from 'react-hot-toast'


const NoteDetailPage = () => {

  const [note1,setNote] = useState("");
  const navigate = useNavigate();

  const {id} =useParams();

  const getNote= async()=>{
    const {data} = await axios.get(`http://127.0.0.1:8000/api/detail/${id}`);
    console.log(data)
    setNote(data);
  }


  useEffect(()=>{
    getNote();

  },[])


// delete function 

const deleteNote= async(id)=>{
  const response =await axios.delete(`http://127.0.0.1:8000/api/detail/${id}`);
  if (response.status ==200){
    toast.success("data deleted successfully");
    navigate("/");
  }

}


  return (
    <div className='note-detail'>
      
      <Card className="text-center">
          <Card.Header>Note details</Card.Header>
          <Card.Body>
            <Card.Title>{note1.title}</Card.Title>
            <Card.Text>
              {note1.description}
              
             </Card.Text>
            <hr></hr>
            <Button variant="primary " className='note-detail-btn' href='/'>Go Back</Button>
            <Button variant="primary" onClick={()=>{deleteNote(note1.id)}}>Delete</Button>

          </Card.Body>
       </Card>
    </div>
  )
}

export default NoteDetailPage