import React, { useState } from "react";

const Application = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [degree, setDegree] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState("");

  const handleNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleDobChange = e => {
    setDateOfBirth(e.target.value);
  };

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const handleDegreeChange = e => {
    setDegree(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleResumeChange = e => {
    setResume(e.target.value);
  };

  const validate = () => {
    const errors = {};
    const firstNameRegex = /^[A-Za-z\s]+$/;
    const lastNameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@].\[^\s@]+$/;
    const numberRegex = /^\d{10}$/;
    const FileTypeRegex = ["application/pdf", "application/msword"];

    if (!firstName) {
      errors.firstName = "Field is required";
    } else if (!firstNameRegex.test(firstName)) {
      errors.firstName = "Invalid Format";
    }

    if (!lastName) {
      errors.lastName = "Field is required";
    } else if (!lastNameRegex.test(lastName)) {
      errors.lastName = "Invalid Format";
    }

    if (!dateofbirth) {
      errors.dateofbirth = "Field is required";
    }

    if (!gender) {
      errors.gender = "Gender is required";
    }

    if (!degree) {
      errors.degree = "Degree is required";
    }

    if (!email) {
      errors.email = "email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid Format";
    }
    if (!number) {
      errors.number = "Number is required";
    } else if (!numberRegex.test(number)) {
      errors.number = "Invalid Format";
    }

    if (!resume) {
      errors.resume = "Resume is required";
    } else if (!FileTypeRegex.test(resume)) {
      errors.resume = "Attach only mentioned format";
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const ValidateErrors = validate();
    if (Object.keys(ValidateErrors).length === 0) {
      console.log("Form is submited :", {
        firstName,
        lastName,
        dateofbirth,
        gender,
        degree,
        email,
        number,
        resume
      });
      setFirstName("");
      setLastName("");
      setDateOfBirth("");
      setGender("");
      setDegree("");
      setEmail("");
      setNumber("");
      setResume("");
    } else {
      setErrors(ValidateErrors);
    }
  };

  return (
    <Application onsubmit={handleSubmit}>
      <div>
        <label>Firstname :</label>
        <input
          type="text"
          value={firstName}
          onnchange={handleNameChange}
          placeholder="Enter your firstname"
        />
        {errors.firstName &&<p style={{ color: "red" }}> {errors.firstName}</p>}
        <label>Lastname :</label>
        <input
          type="text"
          value={lastName}
          onnchange={handleLastNameChange}
          placeholder="Enter your lastname"
        />
        {errors.lastName &&<p style={{ color: "red" }}> {errors.lastName}</p>}
        <label>Date of Birth :</label>
        <input type="date" value={dateofbirth} onChange={handleDobChange} />
        {errors.dateofbirth &&<p style={{ color: "red" }}>{errors.dateofbirth}</p>}
        <label>Gender :</label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={handleGenderChange}
        />
        <label>male</label>
        <label>Female</label>
        {errors.gender &&<p style={{ color: "red" }}> {errors.gender}</p>}
        <label>Degree :</label>
        <input
          type="radio"
          value={degree}
          checked={degree === "B.Tech"}
          onChange={handleDegreeChange}
        />
        <input
          type="radio"
          value={degree}
          checked={degree === "M.tech"}
          onChange={handleDegreeChange}
        />
        <input
          type="radio"
          value={degree}
          checked={degree === "B.Sc"}
          onChange={handleDegreeChange}
        />
        <label>B.tech</label>
        <label>M.Tech</label>
        <label>B.sc</label>
        {errors.degree &&<p style={{ color: "red" }}> {errors.degree}</p>}
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onnchange={handleEmailChange}
          placeholder="Enter your Email id"
        />
        {errors.email && <p style={{ color: "red" }}> {errors.email} </p>}
        <label>Phone number :</label>
        <input
          type="tel"
          value={number}
          onnchange={handleNumberChange}
          placeholder="Enter your 10 digitnumber"
        />
        {errors.number &&
          <p style={{ color: "red" }}>
            {errors.number}
          </p>}
        <label>Resume/CV:</label>
        <input type="file" value={resume} onnchange={handleResumeChange} />
        {errors.resume &&<p style={{ color: "red" }}>  {errors.resume}</p>}
        <br />
        <button type="submit">Submit</button>
      </div>
    </Application>
  );
};
export default Application;
