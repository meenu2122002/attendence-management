import React from 'react'
import study from "./teacher.jpeg"
function Teachersignup() {
  const st={
width:"400px",
padding:"4px",
borderRadius:"4px",
border:"2px solid black",
marginLeft:"34px"
  }

  return (
    <div style={{height:"517px",width:"100%",backgroundImage:`url(${study})`}}>
      <div style={{color:"white",margin:" 0px 200px"}}>
        <h1 style={{marginLeft:"150px"}}>Signup as A Teacher</h1>
        <div style={{display:"flex",marginTop:"31px"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",listStyle:"none",fontSize:"25px" ,height:"339px"}}>
        
          <li>  Username:</li>
          <li> Email:</li>
          <li> Password:</li>
          <li>  Confirmpassword:</li>
          <li> Qualifications:</li>
          <li> Main subject:</li>
        </div>
        <div>
        <form action="http://localhost:8080/api/teacher/signup"  method="post">
        
       
      <input type="text" name="username" placeholder='Enter your username'style={st} /><br/><br/>
       <input type="email" name="email" placeholder='Enter your email' style={st}/><br/><br/>
       <input type="text" name="password" placeholder='Enter your strong password' style={st}/><br/><br/>
      <input type="text" name="passwordConfirmation" placeholder='confirm password' style={st} /><br/><br/>
       <input type="text" name="qualifications" placeholder='Enter your Qualifications' style={st}  /><br/><br/>
    
       <input type="text" name="mainsub" placeholder='Enter your main subject' style={st}  /><br/><br/>
    
       <button type="submit" className="btn btn-danger" style={{marginLeft:"200px"}}>Submit</button>

      </form>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default Teachersignup
