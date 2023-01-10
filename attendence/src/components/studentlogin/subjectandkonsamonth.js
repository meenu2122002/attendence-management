import React, { useContext } from 'react'
import study from "../teacherauth.jpeg"
import Context from '../context'
import {useNavigate} from "react-router-dom"



function Signup() {
  
  const navigate = useNavigate();
  const {profile,setprofile}=useContext(Context);
  const handlechange=(e)=>{
    setprofile({...profile,[e.target.id]:e.target.value});
  }
  const handle=()=>{
navigate("/displayattendence");
  }
  const st={
width:"400px",
padding:"4px",
borderRadius:"4px",
border:"2px solid black",
marginLeft:"34px"
  }

  return (
    <div style={{height:"517px",width:"100%",backgroundImage:`url(${study})`,backgroundRepeat:"no-repeat",backgroundSize: 'cover'}}>
      <div style={{color:"white",margin:" 10px 200px 0px 400px",position:"absolute",top:"153px"}}>
        <h1>Get Attendence Details</h1>
        <div style={{display:"flex",marginTop:"50px"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",listStyle:"none",fontSize:"25px" ,height:"153px"}}>
          
          <li> Subject:</li>
          
          <li> Month:</li>
          <li> Year:</li>
          
        </div>
        <div>
        <form >
        
      
      <input type="text" name="subject" id="subject" placeholder='Choose the subject'style={st} onChange={handlechange}/><br/><br/>
      
       <input type="number" name="month" placeholder='Choose the month ' style={st} id="month" onChange={handlechange}/><br/><br/>
       <input type="number" name="year" placeholder='Choose the year ' style={st} id="year" onChange={handlechange}/><br/><br/>
    
     
       <button type="button" className="btn btn-danger" style={{marginLeft:"131px"}} onClick={handle}>Get Attendence Details</button>

      </form>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default Signup
