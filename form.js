import React,{useState} from "react";

const Form = () =>{
   const [name , setName] = useState('');
   const [age ,  setAge] =  useState('');
   const [gender, setGender] =useState('');
   const [email , setEmail] =useState('');
   const [mobilenumber, setMobileNumber] =useState('');
   const [location , setlocation] =useState('');
   const[errors, setErrors] =useState('');
      const handleNameChange = (e) => {
      setName(e.target.value);
    };
    const handleAgeChange = (e) => {
      setAge(e.target.value);
    };
    const handleGenderChange = (e) => {
      setGender(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handleMobileChange = (e) => {
      setMobileNumber(e.target.value);
    };
    const handlelocationChange = (e) => {
      setlocation(e.target.value);
    };
  
    const validate = () => {
      const errors = {};
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobilenumberRegex = /^\d{10}$/;
  
      if (!name) {
        errors.name = 'Name is required';
      } else if (!nameRegex.test(name)) {
        errors.name = 'Invalid format';
      }
      if (!age) {
        errors.age = 'Age is required';
      }
      if (!gender) {
        errors.Gender = 'Gender is required';
      }
      if (!email) {
        errors.email = 'Email is required';
      } else if (!emailRegex.test(email)) {
        errors.email = 'Invalid email format';
      }
      if (!mobilenumber) {
        errors.mobilenumber = 'Mobile number is required';
      } else if(!mobilenumberRegex.test(mobilenumber)){
         errors.mobilenumber ="only 10 digits"
      }
if(!location){
   errors.location ='Field is required'
}
}
return errors;
};
 
 const handleSubmit = (e) =>{
    e.preventDefault();
    const ValidateErrors=validate();
    if(Object.keys(ValidateErrors).length===0){
      console.log("Form is Submitted :",{name,age,gender,email,mobilenumber,location})
    setName("");
    setAge("");
    setGender("");
    setEmail("");
    setMobileNumber("");
    setlocation("");
    } else  {
    setErrors(ValidateErrors)
    }


    return(
   <form onSubmit ={handleSubmit}>
   <div>
   <label> Name : </label>
   <input 
    type = "text"
    value ={name}
    onChange ={handleNameChange}
    />
    {errors.name && <p style ={{color:'Red'}}>{errors.name}</p>}
    <label> Age : </label>
   <input 
    type = "number"
    value ={Number}
    onChange ={handleAgeChange}
    />
    {errors.age && <p style ={{color:'Red'}}>{errors.age}</p>}

    <label> Gender : </label>
   <input 
    type = "radio"
    value = "male"
    checked ={gender ==="male"}
    onChange ={handleGenderChange}
    />
    <input 
    type = "radio"
    value = "female"
    checked ={gender==="female"}
    onChange ={handleGenderChange}
    />
    {errors.Gender && <p style ={{color:'Red'}}>{errors.Gender}</p>}
    <label>Email: </label>
   <input 
    type = "email"
    value ={email}
    onChange ={handleEmailChange}
    />
    {errors.email && <p style ={{color:'Red'}}>{errors.email}</p>}
    <label> Phone number: </label>
   <input 
    type = "tel"
    value ={Number}
    onChange ={handleMobileChange}
    />
    {errors.Mobilenumber && <p style ={{color:'Red'}}>{errors.Mobilenumber}</p>}
    <label> Location: </label>
   <input 
    type = "text"
    value = {Option}
    onChange ={handlelocationChange}
    />
    {errors.location && <p style ={{color:'Red'}}>{errors.location}</p>}
    <br></br>
    <button type ="submit"> Submit </button>
   </div> 
   </form>
);
 }

export default Form;