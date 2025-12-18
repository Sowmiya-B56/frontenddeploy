import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudent , updateStudent } from "../api";

function EditStudent(){
    const{id}=useParams();
    const[student,setStudent]=useState({name:"",email:""});
    const navigate=useNavigate();
    useEffect(()=>{
        getStudent(id).then(res=>{if (res.data) {setStudent(res.data)}});
    },[id]);

   const submit=async(e)=>{
        e.preventDefault();
        await updateStudent(id,student);
        navigate("/");
    };

    return(
        <div>
        <h2>Edit Student</h2>
        <form onSubmit={submit}>
            <div>
          <label>Name</label>
          <input value={student.name} onChange={e=>setStudent({...student,name:e.target.value})}/>
          </div>
          <label>Email</label>
          <input value={student.email} onChange={e=>setStudent({...student,email:e.target.value})}/>
          <button>Update</button>
        </form>
        </div>
    );
}
export default EditStudent;