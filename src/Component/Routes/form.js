import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [location, setlocation] = useState("");
  const [errors, setErrors] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value.toUpperCase().trim());
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value.toUpperCase().trim());
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value.toUpperCase().trim());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value.trim());
  };

  const handlelocationChange = (e) => {
    setlocation(e.target.value.toUpperCase().trim());
  };

  const validate = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilenumberRegex = /^\d{10}$/;

    if (!name) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      errors.name = "Invalid format";
    }

    if (!age) {
      errors.age = "Age is required";
    } 

    if (!gender) {
      errors.Gender = "Gender is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!mobilenumber) {
      errors.mobilenumber = "Mobile number is required";
    } else if (!mobilenumberRegex.test(mobilenumber)) {
      errors.mobilenumber = "only 10 digits";
    }

    if (!location) {
      errors.location = "Field is required";
    }
    return errors;
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidateErrors = validate();
    if (Object.keys(ValidateErrors).length === 0) {
      console.log("Form is Submitted :", {
        name,
        age,
        gender,
        email,
        mobilenumber,
        location,
      });
      setName("");
      setAge("");
      setGender("");
      setEmail("");
      setMobileNumber("");
      setlocation("");
    } else {
      setErrors(ValidateErrors);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Name : </label>
        <input type="text" value={name} onChange={handleNameChange} />
        {errors.name && <p style={{ color: "Red" }}>{errors.name}</p>}
        <label> Age : </label>
        <input type="number" value={age} onChange={handleAgeChange} />
        {errors.age && <p style={{ color: "Red" }}>{errors.age}</p>}

        <label> Gender : </label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        <label>Male</label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        <label>Female</label>
        {errors.Gender && <p style={{ color: "Red" }}>{errors.Gender}</p>}
        
        <label>Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        {errors.email && <p style={{ color: "Red" }}>{errors.email}</p>}
        <label> Phone number: </label>
        <input type="tel" value={mobilenumber} onChange={handleMobileChange} />
        {errors.Mobilenumber && (
          <p style={{ color: "Red" }}>{errors.Mobilenumber}</p>
        )}
        <label> Location: </label>
        <input type="text" value={location} onChange={handlelocationChange} />
        {errors.location && <p style={{ color: "Red" }}>{errors.location}</p>}
        <br></br>
        <button type="submit"> Submit </button>
      </div>
    </form>
  );
};

export default Form;
