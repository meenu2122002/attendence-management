import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import Context from '../context';
import Studentitem from "./studentprofile"
import Alert from "./alert"
import {useNavigate} from "react-router-dom"


function Takeattendence() {
  const navigate = useNavigate();


const {students,setattendence,markattendence}=useContext(Context)
const [studentslist,setstudentslist]=useState([]);
const handle=async()=>{
  // console.log(markattendence)
  const response = await fetch("http://localhost:8080/api/teacher/takeattendence", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({attendence:markattendence,students:students}) 
        
     });
   navigate("/")  
}
const getstudents=async ()=>{
     const response = await fetch("http://localhost:8080/api/teacher/getstudents", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({students}) 
        
     });
const parsedata=await response.json()
// console.log(parsedata)
setstudentslist(parsedata);
// console.log("setlist array is ");
// console.log(studentslist.length +"studentlistlength");
   
    }


    useEffect(()=>{
      getstudents();
    },[])


    return (
      <>
      <h1 style={{textAlign:"center",fontFamily:"sans-serif",marginTop:"20px"}}>Taking the Attendence of Computer Engineering students (CE32) </h1>
      <div style={{fontFamily:"sans-serif",margin:"10px 100px 10px 100px",backgroundColor:"rgb(58 50 50 / 32%)"}}>
        
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
     
      
{studentslist.map((e)=>{
  return <Studentitem username={e.username} email={e.email}  course={e.course?e.course:"Computer Engineering 32"} skills={e.skills?e.skills.substring(0,75):"Engaged in learning new things Engaged in learning new things Engaged in learning new things Engaged in learning new things"} rollno={e.rollno} id={e._id} key={e._id}/>
})}
    </div>
    </div>
    <button type="button" className={`btn btn-warning ${!(markattendence.length==studentslist.length)?"disabled":""}`} style={{margin:"10px 0px 10px 45vw"}} onClick={handle} >Take Attendence</button>
    </>
  )
}

export default Takeattendence
