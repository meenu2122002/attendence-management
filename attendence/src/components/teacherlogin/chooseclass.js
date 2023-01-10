import React, { useContext } from 'react'
import study from "../teacherauth.jpeg"
import {useNavigate} from "react-router-dom"

import Context from '../context';
function Signup() {
const {setstudents,students}=useContext(Context);
const handlechange=(e)=>{
   setstudents({...students,[e.target.id]:e.target.value});
};

  const navigate = useNavigate();
const redirect=()=>{
  navigate("/takeattendence")
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
        <h1>Enter the Branchname and subject details to take attendence</h1>
        <div style={{display:"flex",marginTop:"50px"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",listStyle:"none",fontSize:"25px" ,height:"97px"}}>
          
          <li>  Subject:</li>
          
          <li>Classname:</li>
          
        </div>
        <div>
        <form>
        
      
      <input type="text" name="subject" placeholder='Enter the subject name'style={st} onChange={handlechange} id="subject" /><br/><br/>
      
       <input type="text" name="classname" placeholder='Enter the classname ' style={st} onChange={handlechange} id="branch"/><br/><br/>
    
     
       <button type="button" className="btn btn-danger" style={{marginLeft:"200px"}} onClick={redirect}>Submit</button>

      </form>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default Signup
