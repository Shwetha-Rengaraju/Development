//Mapping//-Create an array by using map function , without changing its original value

const marks=[45,47,38,49,42];
// const converted =marks.map(function(original){
//   return original *2;
// })
// console.log(converted);
 
//Arrow function

const converted =marks.map(num=> num*2)
 console.log(converted);

// shorthand way for arrow function
 const value = x => x * x;
 console.log(value(220));
 //
  const multiplication =(a, b)=> a*b
  console.log(multiplication(22,5));
//

const information =()=>{
 console.log("Kindly follow the instruction before you enter");
}
 information();

 //array of objects using map function
 const pens =[
  {Brand:"Reynolds",Color: "Blue"},
  {Brand:"Cello",Color:" Black"},
  {Brand:"Flair",Color:"Red"},
  {Brand:"Parker",Color: "Blue"},
   ]
 const brandname =pens.map(names => names.Brand);
 console.log(brandname);
 const Colorname =pens.map(ink =>ink.Color);
 console.log(Colorname);

// destructuring --It is amethod to to unpack or extractvelements from an array or objects and assign them in a seperate variable.
// destructuring of array
//1
const numbers=[44,69,77];
 const [first, second, third,fourth =55 ] =numbers;
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
  //2
  const num=[90,99,47,93,56];
  const[num1,num2]=num;
  const[, ,num3,,num5]=num;
  console.log(num1,num2);
  console.log(num3,num5);
  //3 rest
//   const ages =[22,12,23,25,28];
//   const[age1,age2, ...rest] =ages;
//   console.log(rest);
//   console.log(age1);

// destructring of object
const laptops={
    Name:"Dell",
    Windows:"windows 11",
    size :"15.4 inch"
}
// const {Name,Windows,size}=laptops;
// console.log(Name);
// console.log(Windows);
// console.log(size);

// const {Name: Brand,Windows}=laptops;
// console.log(Brand,Windows);

// const {Name: Brand,Windows, model="Inspiron15"}=laptops;
// console.log(Brand,Windows,model);

//...rest
const{Name,...rest}=laptops;
console.log(rest);


// Nested object destructuring


const data ={
    Name :"Shwetha",
    address : {
        Street :"19b Rajaji nagar",
        District :"Ariyalur",
        Pincode :"621713"   
     }
}
//  const {Name, address:{Street,District,Pincode}}=data;
//  console.log(Name,Street,District, Pincode);
 

//  const workers ={
//      Type : "Permanant",
//     id1:{
//       Name : "shwetha",
//       Age : "22",
//       Gender :"Female",
//       City : "Chennai"
//     },
//     id2 :{
//         Name : "Charu",
//         Age : "12",
//         Gender :"Female",
//         City : "Chennai"
//  },
//    id3 :{
//       Name : "Rengaraju",
//       Age : "32",
//       Gender :"male",
//       City : "Chennai"
//    }
// }
//  const {Type,id1:{Name,Age,City}}=workers;
//  console.log(Type);
//  console.log(Name);
//  console.log(Age);
//  const {Type,id2:{Name,Age,City}}=workers;
//  console.log(Type);
//  console.log(Name);
//  console.log(Age);

 //Destructuring of function in array

function printelements([first, second]) {
    console.log(first);  
    console.log(second); 
  }
  
  const values = [10, 20, 30];
  printelements(values);
  // /Destructuring of function in objects

  function printvalues({name, age}) {
    console.log("Name :$ {Name}");  
    console.log("age : $ {Age}"); 
  }
  
  const val= {Name:"Shwetha", Age :"22"}
  printvalues(val);

