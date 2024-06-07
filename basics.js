console.log(`Hello`);
//console.log(`I like Burger`);
//window.alert(`This is an alert`);
//window.alert(`Kindly notice`);
// let Charu=" Charu Mental"
// console.log(typeof Charu);
// console.log(Charu);
// let price=10.09;
// console.log(typeof price);
// console.log(`The notebook is $${price}`);
// let favourite_food='Burger';
// console.log(`I like ${favourite_food}`);
// let email="shwetharengaraju@gmail.com";
// console.log(`My email id is ${email}`);
// let online=true
// console.log(`The student enrolled is ${online}`);
// let forsale=false
// console.log(`Is the car is for sale:${forsale}`);

// document.getElementById("lorem").textContent =`Hello`;
// document.getElementById("french").textContent=`I hate my life`;

// let blockVariable = "3";

// if (true) {
//     let blockVariable = "5";
//     console.log(blockVariable); // "I am inside an if block"
// }

// console.log(blockVariable); // "I am a block-scoped variable"

// // Globally-scoped
// var globalVariable = "I am a global variable";

// function myFunction() {
//     // Function-scoped
//     var functionVariable = "I am a function-scoped variable";
//     console.log(functionVariable);
// }

// myFunction();
// console.log(globalVariable);
// // console.log(functionVariable); // This would cause an error


// console.log(myVar); // Output: undefined
//  var myVar = "Hello";
//  console.log(myVar); // Output: "Hello"

// 


// Arithmetic operators

//  students=students-2;
// students=students+2;
// students=students*2;
// students=students/2;
// students=students**2;
// students=students%2;

// Augumented Assignment operators

//  students +=2;
//  students -=2;
// students *=2;
// students /=2;
// students **=2;
// students %=2;
// students ++; increement operator
// students --; decreement operator
// let result=1*2+3-2;
// let result=(5*2)+3;
// let result=100%5-5+2;
//  console.log(result);
  
// Userinput
// Easy way- Window prompt
// Professional way-HTML Text
// let username;

// username = window.prompt("What's your username ?" );
// console.log(username);// We get username alert in the windows and if we enter our user name, we'll get it in the console.

// document.getElementById("mysubmit").onclick=function(){
//  username = document.getElementById("H1").value;
//  console.log(username);

// }    TYPE CONVERSION:-
//  let age = window.prompt(`How old are you ?`);
//  age= Number(age);
//   age+=1;
//   console.log(age);
//  let x ; undefined
//  let y ; Nan
//  let z;False

//  x = String(x);
//  y = Number(y);
//  z = Boolean(z);

//   console.log(x,typeof x);
//   console.log(y,typeof y);
//   console.log(z,type );

// // not a number (NAN)
// console.log(isNaN ("Hello"));
// console.log(isNaN ("365"));
// console.log(isNaN ( 1));

//  Ternary operator
// let age = 19;
// let message = (age >=18)? "yes": " No ";
// console.log(message);

//  let score = 80;
//  let Grade =(score >=85) ? "A":
//             (score >=90) ? "B":
//             (score >=95) ? "C":"D";
// console.log(Grade);

// let time = 13;
// let greeting = time < 12 ? "Good Morning":"Good Afternoon";
// console.log(greeting);

//  let purchaseamount = 125;
//  let discount = purchaseamount > 100 ? 10:0 ;
//  console.log(`Your total is $ ${purchaseamount-purchaseamount * (discount/100)}`);

// Function
// function happyBirthday (username,age){
//     console.log(`Happy birthday to you`);
//     console.log(`Happy birthday to you my ${username}`);
//     console.log(`Happy birthday to you dear`);
//     console.log(`Happy that you're turning ${age}`);
// }
// happyBirthday("Shwetha", 22);
// happyBirthday("vaish",23);
// happyBirthday("Kavi", 25);
// happyBirthday("anitha",22);
//  function add(x , y){
//  return(x+y);   
// }
//   console.log(add,(2+3));

// function subtract(x , y){
//     return(x-y);   
//    }
//   console.log(subtract,(2-3));

//  function multiply(x , y){
//         return(x*y);   
//        }
//   console.log(multiply,(2*3));

// function divide(x , y){
//           return(x/y);   
//            }
//   console.log(divide,(2/3));

// Conditions like if else, ad ternary in functions
// function iseven(number){
//     return number%2==0 ? true:false;
// }
//     console.log(iseven (1));
//     if (number % 2===0);{
//     return true;}
//  else{
//     return false;}
//  } if else statement
// function isvalid(email){
//     if(email.includes("@")){
//     return true;
// }
//  else {
//     return false;
//  }
// return email.includes('@')?true:false;
// }
// console.log(isvalid("bro@fake.com"));
// console.log(isvalid("brofake.com"));