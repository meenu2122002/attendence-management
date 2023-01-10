import React from 'react'
import study from "./study.jpeg"
function signup() {
  const st={
width:"400px",
padding:"4px",
borderRadius:"4px",
border:"2px solid black",
marginLeft:"34px"
  }

  return (
    <div style={{height:"576px",width:"100%",backgroundImage:`url(${study})`}}>
      <div style={{color:"white",margin:" 0px 200px"}}>
        <h1>Signup as A student</h1>
        <div style={{display:"flex"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",listStyle:"none",fontSize:"25px" ,height:"453px"}}>
          <li> Rollno:</li>
          <li>  Username:</li>
          <li> Email:</li>
          <li> Password:</li>
          <li>  Confirmpassword:</li>
          <li> Universityname:</li>
          <li> Branch:</li>
          <li> Interest:</li>
        </div>
        <div>
        <form action="http://localhost:8080/api/student/signup"  method="post">
        
       <input type="text" name="rollno" placeholder='Enter your rollno' style={st}/><br/><br/>
      <input type="text" name="username" placeholder='Enter your username'style={st} /><br/><br/>
       <input type="email" name="email" placeholder='Enter your email' style={st}/><br/><br/>
       <input type="text" name="password" placeholder='Enter your strong password' style={st}/><br/><br/>
      <input type="text" name="passwordConfirmation" placeholder='confirm password' style={st} /><br/><br/>
       <input type="text" name="universityname"placeholder='Enter your university name' style={st} /><br/><br/>
       <input type="text" name="branch"placeholder='Enter your branch' style={st}  /><br/><br/>
       <input type="text" name="skills"placeholder='Enter something about yourself' style={st}  /><br/><br/>
     
       <button type="submit" className="btn btn-danger" style={{marginLeft:"200px"}}>Submit</button>

      </form>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default signup
