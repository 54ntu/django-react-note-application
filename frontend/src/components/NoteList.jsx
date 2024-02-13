import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button,Table } from 'react-bootstrap'



const NoteList = () => {

    const [note,setNote] = useState([])

    const getNote = async()=>{
        const response = await axios.get('http://127.0.0.1:8000/api/');
        console.log(response.data);
        setNote(response.data);

    }

    useEffect(()=>{
        getNote();
    },[])


  return (
    <div className='note-list'>
       <Table>
            <thead>
                <tr>
                <th>S.N.</th>
                <th>Title</th>
                <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    note.map((val,index)=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val.title}</td>
                        <td ><a href={`/detail/${val.id}`} className="btn btn-primary btn-sm">View</a></td>
                        <td ><a href={`/update/${val.id}`} className="btn btn-primary btn-sm">Edit</a></td>

                        </tr>

                    ))
                }
                
            </tbody>
        </Table>
        
    </div>
  )
}

export default NoteList