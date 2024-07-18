import { useState } from "react";

const Form = () =>{
   const [Name , setName] = useState(' ');

const handlenamechange = (e)=>{
    setName(e.target.value);
};
 const  handlesubmit = (e) =>{
    e.preventDefault();
 };

return(
   < Form onSubmit ={handlesubmit}>
   <div>
   <label> Name : </label>
   <input 
    type = "text"
    value ={Name}
    onchange ={handlenamechange}
    />
    <button type ="submit"> Submit </button>
   </div> 
   </Form>
)
};

export default Form;