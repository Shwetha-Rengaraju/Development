//if else statement
let x = 30;
let y = 20;

if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("y is greater than x.");
}
//else if statement
let a= 30;
let b = 20;
let c =40;

if (a > b) {
  console.log("a is greater than b");
} else if (c > b) {
  console.log("c is greater than b.");
} else if(c > a) {
  console.log("c is greater than a");
} else{
    console.log("Greater than c");
}

// let day = 8 ;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Sunday";
//     break;
//   case 2:
//     dayName = "Monday";
//     break;
//   case 3:
//     dayName = "Tuesday";
//     break;
//   case 4:
//     dayName = "Wednesday";
//     break;
//   case 5:
//     dayName = "Thursday";
//     break;
//   case 6:
//     dayName = "Friday";
//     break;
//   case 7:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log( "Today is : ",dayName); // Outputs: "Thursday"
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;    
    case 3:
        day = "Wednesday";
        break;    
    case 4:
        day = "Thursday";
        break; 
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;       
    default:
        day = "No values satisfy the condition";
        break;

}

console.log("Today is : ", day);

let text;
switch (new Date().getDay()) {
    case 6: 
      text = "Today is Saturday"
      break;
    case 0:
      text = "Today is Sunday" 
      break;
    default:
      text = "The values not satisfy the condition"       
}
console.log(text);

const cars = ["BMW", "Volvo", "Audi", "Range Rover"];

let i, len, names;

for (i = 0, len = cars.length, names = ""; i < len; i++) {   //i++ => i = i + 1
    names += cars[i] + ","                                   // names = names + car[i]
}

console.log(names);

// set method -set identifies the unique value and displays unique value
const alphabets = ['s','h','e','h','t','e','w','t',];
const removeDuplicates = Array.from(new Set(alphabets));
console.log(removeDuplicates);

let test = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) {break};
    test += "Number is " +  i + ", " 
}

console.log(test);


let test1 = "";
for (let i =0; i < 12;i++){
 if(i===10) {continue};
 test1+="The Number is "+i+","
}

console.log(test1);

const flavour =["Strawberry","Vanilla","Chocolate","Mulberry"];
flavour.forEach((flavours) =>{
  console.log(flavours);
});

const num = [1,2,3,4,5,6];
const evennumbers=num.filter((numbers)=>numbers % 2===0);
console.log(evennumbers);

const num1 = [1,2,3,4,5,6,7,8];
const evennum = num1.find((numbers)=> numbers % 3===0);
console.log(evennum);


// let numText;
// const ages = [32, 35, 16, 40, 18];

// ages.forEach((element) => console.log(element))

// function checkAge(age) {
//     return age >= 20;
// };

// console.log(ages.filter(checkAge));
// console.log(ages.find(checkAge))

// function myFunc(item, index) {
//     numText += index + ": " + item + ", "
//    console.log(ages.forEach(myFunc));

 
 
 const ages = [32, 35, 16, 40, 18];
//  function myFunc(item, index) {
//    numText += index + ": " + item + ", "
//  }
//  console.log(ages.forEach(myFunc));


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

 const person = {
  firstName: "John",
  lastName: "Charlie",
  age: 50,
  city: "London",
  teleNum: "4687-758-7594"
};

let {firstName: name, city, landMark = "City Bank"} = person;

console.log(name);
console.log(landMark);