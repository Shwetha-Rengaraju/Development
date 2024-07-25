import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {validusers}from '../utils/validusers';

const loginpage =()=>{
  const navigate =useNavigate();
  const[formdetails,setformdetails]=useState({
    Username :"",
    Password :""
  });
const handleLogin = ()=>{
    const{Username,Password} =formdetails;
    const client =validusers.find((client)=>client.Username === Username && client.Password ===Password);
}
if(client){
    navigate("/formpage");
    toast.success("Successfully logged in");
    setformdetails({
        Username :"",
        Password :" "
    });
}else{
    toast.console.error("Invalid Username and password");
    setformdetails({
        Username :"",
        Password :" "
    });
}
const handleChangeinput =(e)=>{
    
}

}