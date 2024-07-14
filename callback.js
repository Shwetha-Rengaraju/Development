// //Immediately Invoked  Function Expresssion
// (function () {
//     let message="This function is  immediately invoked Function";
//     console.log(message);
// })();

//  // Call Back Function
//   const notifypeer =() =>{
//     console.log("Run the Code");
//   }

//   const finishproject= (callback) =>{
//     setTimeout(() => {
//         console.log("I Finished my part");
//         callback();
//     }, 3000);
//   }
// finishproject(notifypeer);

// //using parameters in call back function
// const notifyvalue = (multiply) =>{
//     console.log("The value is : " ,multiply);
// }

// const Delayvalue =(a, b, multiply ) =>{
//     console.log("Starting delay");
    
//     setTimeout(() =>{
//     console.log("Sorry for the delay");
//     const answer=a*b;
//     multiply(answer);
//     },5000)
// }

// Delayvalue(5 ,10,notifyvalue);

// // call method
// function  age ( ){
//     return "My age is " + this.age
// }
// //---------------------------------
// let obj = {age : 22};

// console.log(age.call(obj));

// let  data ={
//     Name :"Charu",
//     Gender :"Female",
//     Company :"TCS",
//     DOB : "22/05/2002",
//     getDOB : function(){
//         return this.DOB;
//     }
// };

// let data1 ={DOB :"07/03/2011"}
// console.log(data.getDOB.call(data1));
//------------------------------------


 function cosmetics(message){
    return this.product +  " is my go to wear " + message;
 }

const productName = {product : "Lipstick"}; 
console.log(cosmetics.call(productName,"Makeup"));

// apply method---------------------------- array as parameter

function books(genre){
    return this.Novel + " is my favourite " + genre; 
}
const Bookname ={Novel:"Verity"};
console.log(books.apply(Bookname,["Thriller novel"]));

//bind method
 let gadget ={ Type :"  Android Phone"}

 let gadgetdetails ={
    details :function(Name ,Model){
    return this.Type +" , " + " Details : "+ Name +" , "+ Model;
    }
 }
 let updateddetails = gadgetdetails.details.bind(gadget,"SAMSUNG","J7S");
 console.log(updateddetails());