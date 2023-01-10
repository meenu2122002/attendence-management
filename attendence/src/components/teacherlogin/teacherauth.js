import React from 'react'
import study from "../teacherauth.jpeg"
function signup() {
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
        <h1>Login as A Teacher</h1>
        <div style={{display:"flex",marginTop:"50px"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",listStyle:"none",fontSize:"25px" ,height:"97px"}}>
          
          <li>  Email:</li>
          
          <li> Password:</li>
          
        </div>
        <div>
        <form action="http://localhost:8080/api/teacher/teacherlogin"  method="post">
        
      
      <input type="text" name="email" placeholder='Enter your email'style={st} /><br/><br/>
      
       <input type="text" name="password" placeholder='Enter your  password' style={st}/><br/><br/>
    
     
       <button type="submit" className="btn btn-danger" style={{marginLeft:"200px"}}>Login</button>

      </form>
        </div>
      
      </div>
    </div>
    </div>
  )
}

export default signup
