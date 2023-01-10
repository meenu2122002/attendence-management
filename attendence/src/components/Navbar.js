import React from 'react'
import logo from "./logo.jpg"
function Navbar() {
  return (
   <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <img src={logo} style={{height:"75px",width:"75px",borderRadius:"58px"}} alt="" />
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup as Student</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/teachersignup">Signup as Teacher</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/studentlogin">Login as Student</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/teacherlogin">Login as Teacher</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
