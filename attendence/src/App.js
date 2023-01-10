import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Studentlogin from "./components/studentlogin/userpasswordconfirm"
import Subjectandkonsamonth from './components/studentlogin/subjectandkonsamonth';
import Teachersignup from './components/teachersignup';
import Teacherlogin from "./components/teacherlogin/teacherauth"
import Chooseclassandsubject from "./components/teacherlogin/chooseclass"
import Displayattendence from './components/attendence/displayattendence';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import  Signup from "./components/signup"
import Home from "./components/home"
import Takeattendence from './components/attendence/takeattendence';
import Importcontext from './components/importcontext';

function App() {
  return (
    <>
    {/**/}
  
    <Importcontext>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/" element={ <Chooseclassandsubject/> } /> */}
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/displayattendence" element={ <Displayattendence/> } />
      <Route path="/teachersignup" element={ <Teachersignup/> } />
      <Route path="/studentlogin" element={ <Studentlogin/> } />
      <Route path="/teacherlogin" element={ <Teacherlogin/> } />
      <Route path="/takeattendence" element={ <Takeattendence/> } />
      <Route path="/chooseclassandsubject" element={ <Chooseclassandsubject/> } />
      <Route path="/subjectandmonth" element={ <Subjectandkonsamonth/> } />
      
    </Routes>
  </BrowserRouter>
  </Importcontext>
  </>
  );
}

export default App;
