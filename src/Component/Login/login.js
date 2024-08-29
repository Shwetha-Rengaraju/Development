import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {validusers} from "../utils/validusers";



const LoginPage = ({loggedIn}) => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    const { username, password } = formDetails;
    const trimmedUserName = username.trim();
    const trimmedPassWord = password.trim();
    const client = validusers.find(
      (user) => user.Username === trimmedUserName && user.Password === trimmedPassWord
    );
    
    if (client) {
      sessionStorage.setItem("name", client.Username)
      loggedIn((current) => !current)
      navigate("/home");
      toast.success("Successfully logged in");
      setFormDetails({
        username: "",
        password: "",
      });
    } else {
      toast.error("Invalid Username and password");
      setFormDetails({
        username: "",
        password: "",
      });
    }
  };
   
  const handleChangeInput = (e) => {
    const {value, name} = e.target;
    setFormDetails((prevState) => ({
        ...prevState,
        [name]: value,
    }))
  };
   

  return(
    <form onSubmit={handleLogin}>
    <div>    
      <label>Username:</label>
      <input type="text"
       name="username"  
       value ={formDetails.username}
       onChange ={handleChangeInput}
      />
      <label>Password:</label>
      <input type="password"  
       name="password"
       value ={formDetails.password}
       onChange ={handleChangeInput}
      />
      <button type ="submit" >Submit</button>

    </div>
    </form>
  );
};
export default LoginPage;

