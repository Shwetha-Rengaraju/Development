// spread operator in array
let ages=[22,12,56,];
let addages=[...ages ,50,25];
console.log(addages);
//spread operator in object
let alpha ={a:1, b:1,}
let beta ={...alpha,c:1,d:1}
console.log(beta);
let Musicalinstrument2 ={
    Instrument :"Keyboard",
     Brand : "Yamaha"
}

let addfeature ={...Musicalinstrument2, Version:"12XSound",}
console.log(addfeature);

//spread operator in  function
const arr =[2,3,4];
function multiply(a ,b ,c){
    return a *b *c;
}
console.log(multiply(...arr));


//Rest operator in array

// const[first,...rest] =[1,2,3,45,6];
// console.log(first);
// console.log(rest);

//rest operator in object
const {a,...rest} ={ a:1, n:4,h:7}
console.log(rest);

// Rest operator in functions
function sum(...numbersValue){
    return numbersValue.reduce((acc, curr)=>acc+curr,0 );
}
console.log(sum(1,2,3,4,5));
console.log(sum());



//methods of object
// create -object
const createobj =Object.create(Musicalinstrument2);
console.log(createobj);
// value-object
const valobj =Object.values(Musicalinstrument2);
console.log(valobj);
//key-object
const keyobj =Object.keys(Musicalinstrument2);
console.log(keyobj);
//obj-entries
const entriesOfObj=Object.entries(Musicalinstrument2);
console.log(entriesOfObj);
// obj-assign- Over writes the original value

const Musicalinstrument={ Instrument : "Keyboard", Brand : "Yamaha"};

const Musicalinstrument1 ={ Instrument :"Flute",Brand : "Unknown"};

const targetToSource =Object.assign(Musicalinstrument,Musicalinstrument1);
console.log(targetToSource);

//How to clone an object - i)object.assign ii)J.son parse iii)Spread operator
//i)
const person ={
    name:"Shwetha",
    age : 22
}
const clone =Object.assign({},person);
console.log(clone);
//ii)
const cloneObj =JSON.parse(JSON.stringify(person));
console.log(cloneObj);
//iii)
const spreadclone ={...person};
console.log(spreadclone);
// Set interval |Set Timeout(Function , delay) 
//Set interval
const interval = setInterval(() =>{
    console.log("Hello");
},3000);
//Set Timeout
setTimeout(() =>{
    clearInterval(interval);
    console.log("Interval stopped");
},5000);