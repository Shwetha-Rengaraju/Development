import React from "react";
import { Routes,Route } from "react-router-dom";
import {ToastContainer} from"react-toastify";
import LoginPage from'./loginpage';
import Form from './form';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <h2> React Form</h2>
      <Routes>
        <Route
        path="/"
        element={<LoginPage />}
        />

        <Route
        path="/formpage"
        element={<Form />}
        />
      </Routes>
       <ToastContainer />
  
    </div>
  );

}

export default App;
