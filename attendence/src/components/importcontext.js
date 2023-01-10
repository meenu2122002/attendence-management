import {  useState,useContext } from "react";
import React from 'react'
import  Context from "./context"
function Importcontext(props) {
const [students,setstudents]=useState({
  branch:"",
  subject:""
});
const [profile,setprofile]=useState({
  subject:"",
  month:0,
  year:2022
})
const [markattendence,setattendence]=useState([])
  return (
    <Context.Provider value={{setstudents,students,setattendence,markattendence,profile,setprofile}}>
      {props.children}
    </Context.Provider>
  )
}

export default Importcontext
