import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Component/Routes/home";
import About from "./Component/Routes/about";
import Contact from "./Component/Routes/contact";
import LoginPage from "./Component/Login/login";
import FormPage from "./Component/registerform";
import Layout from "./Component/Layout/layout";
import "./Component/Login/login.css";
import "./Component/Navbar/navbar.css";



function App() {
   const [loggedIn,setLoggedIn] = useState(false);
   
   useEffect(() => {
    const login = sessionStorage.getItem("name");
      if(login) {
        setLoggedIn(true);
      }
     }, [loggedIn]);

  return (
  
    
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage loggedIn = {setLoggedIn} />} 
          />
          <Route path="/home" element={
             loggedIn ?
            (<Layout>
             <Home />
            </Layout>) :(
             <LoginPage loggedIn ={setLoggedIn} />
            )
            } 
          />
          <Route path="/about" element={
             loggedIn ?
            (<Layout>
             <About />
            </Layout>) :(
             <LoginPage loggedIn ={setLoggedIn} />
            )
            }  
          />
          <Route path="/contact" element={
            loggedIn ?
            (<Layout>
             <Contact />
            </Layout>) :(
              <LoginPage loggedIn={setLoggedIn} />
            )
            } 
          />
          <Route path="/form" element={
             loggedIn ?
            (<Layout>
             <FormPage />
            </Layout>) :(
              <LoginPage loggedIn= {setLoggedIn} />
            )
            } 
          />
        </Routes>
        <ToastContainer />
      </div>

  );
}

export default App;
