import React, { useEffect } from 'react'
import front from "./kaam.jpeg"
import jcbose from "./jcbose.jpg"
import vicechancellor from "./vicechancellor.jpg"
function Home() {

  return (
   
    
     
 <div style={{width:"100%",position:"absolute",top:"80px",backgroundImage:`url(${front})`,backgroundSize: 'cover',fontFamily:"sans-serif",color:"white",
        backgroundRepeat: 'no-repeat'}}>
    <div style={{display:"flex"}}>
    <img src={jcbose} alt="" style={{height:"300px",width:"300px",borderRadius:"173px"}}/>
    <div style={{position:"relative",top:"40px",color:"white",margin:"0px 10px 0px 200px",width:"100%"}}>
      <h1>J.C Bose University of Science And Technology,Ymca ,Faridabad,Haryana</h1>
      <h2>(A Haryana State Government University)</h2>
      <h4>(Established by Haryana State Legislative Act NO. 21 0f 2009 and recognised by UGC Act 1956 u/s 22 to Confer Degree) </h4>
<h3>Accredated 'A+' Grade by NAAC </h3>
      
    
    </div> 
      </div>      
<div style={{display:"flex",marginTop:"50px"}}>
<div style={{width:"1000px",padding:"20px",border:"2px solid white",borderRadius:"5px"}}>
  <h1>Vice Chancellor</h1>
  <h3>Prof. Sushil Kumar Tomar is a distinguished academician, researcher and educational administrator. He is currently the Vice-Chancellor of JC Bose University of Science and Technology, YMCA, Faridabad (formerly known as YMCA University of Science and Technology). Prof. Tomar, who is also a well known Mathematician, assumed the office of Vice-Chancellor on February 22, 2022 as the seventh Vice-Chancellor of the University.

Prior to joining JC Bose University, Prof. Tomar was Dean of University Instruction at Panjab University, Chandigarh. The career of Prof. Tomar as an academician and researcher spans over 34 years. He brings with him a rich mixture of professional expertise and administrative experience.</h3>

</div>
  <img src={vicechancellor} style={{height:"300px",width:"300px",borderRadius:"173px",}} alt=""  />
  
</div>
        
    </div>
  )
}

export default Home
