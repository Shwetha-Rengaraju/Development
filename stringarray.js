//   extracting of the string characters
//   at
//   Char at
//   Charcode At
//   []
let text = "Hello  Shwetha!   ";
console.log(text.charAt(6));
console.log(text.charCodeAt(3));
console.log(text.at(4));
console.log(text.at(-5));
console.log(text[3]);
console.log(text.repeat(6));//repeats the value
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trimStart());
console.log(text.trimEnd());
let text1 = "   Hello, World!   ";
console.log(text1.trim());

let vegeis = "Carrot,Beetroot,Potato"
console.log(vegeis.slice(16));
console.log(vegeis.slice(7,15));
console.log(vegeis.slice(-15));
console.log(vegeis.slice(-16,-1));
console.log(vegeis.substring(0,6));
console.log(vegeis.substr(7));
console.log(vegeis.substr(7,13));
console.log(vegeis.substr(-6));
 let texting = "I have a list obtained from a list"
//    let newText = texting.replace('list',"Checklist");
let newText = texting.replace(/list/g,"Checklist");
// let newText = texting.replace(/list/i,"Checklist");
console.log(newText);


// Converting a string into array
// split
let arr=vegeis.split(",");
console.log(arr);  

let arr1= Array.from(vegeis);
console.log(arr1);

//indexof//
let garden = "It is always pleasant to sit outside the veranda"
let findExa= garden.indexOf('pleasant');
console.log(findExa);

let findExa1=garden.lastIndexOf('outside');
console.log(findExa1);

let findExa2 = garden.search(/always/);
console.log(findExa2);// output 6 index value

console.log(garden.includes("sit"));// output true

console.log(garden.includes("the"));

console.log(garden.startsWith("It",0));

console.log(garden.endsWith("outside"));

let findExa3 = garden.match("an");
console.log(findExa3);

let findExa4 = garden.matchAll("an");
console.log(Array.from(findExa4));

//Array

const lists=["Gucci","LV","Michallekors"];
// console.log("Lists", lists)/ 
// console.log(lists[1]);// Index 

// const brandList = new Array("LV", "Gucci");
// console.log("BrandList", brandList);

//convert string to array   => split
//convert array to string   => toString, Array.from

// console.log("Convert array to string", lists.toString())
// let sortingValue = (lists.toSorted());
// console.log(sortingValue.toReversed());


// console.log(lists.at(1))
// console.log(lists[2]);
// console.log(lists.join(""))

//toReversed()

//sort()

//"Hello world"
function reverseString (str){
return str.split("").reverse("").join("")
}
console.log(reverseString("Hello world"));

//push   => insert a element as a last value of an array
//pop    => remove a element as a last value of an array

// Push
//  let insertValue= lists.push("Gimmy choo")
//  console.log(insertValue);
//  console.log(lists);

//Pop
//  let removeValue= lists.pop();
//  console.log(removeValue);
//  console.log(lists);

//unshift => add a new element into an array (at the beginning)
//shift  =>  remove the first element of an array

// // unshift
// lists.unshift("Prada");
// console.log(lists);

//shift
// lists.shift();
// console.log(lists);
//delete
//  let removeValue=delete lists(0);
//  console.log(removeValue);
 
// Concatenation Method//
 const language=["Javascript","Html","CSS","Bootstrap"];
 const framework=["Angular","React","Vue","Next"];

 const joining= language.concat(framework)
 console.log(joining);
 //Adding one
 const adddingone=language.concat("Material UI");
 console.log(adddingone);
 // Copy within - copies the element from the index number
const numbers=[1,2,3,4,5,6,7]
 const copymethod=numbers.copyWithin(0,2);
 console.log(copymethod);
 
 //splice and slice
 //slice= slice out a piece of  an array-doesnt include last item of an array
 //splice=Add new items to an array 

 let shade =["Blue","Yellow","White","Black"];
 shade.splice(1,2,"Red");
 console.log(shade);//[blue,red,black]

//  let r = [1, 2, 3, 4, 5];
//  r.splice(1, 3); // Remove 3 elements starting from index 1
// console.log(r); // [1, 5]

 //tospliced()-Doesnt change the original value

 let n = [1, 2, 3, 4, 5];
 let newn = n.toSpliced(2, 2); // Remove 2 elements starting from index 2
 console.log(newn); // [1, 2, 5]
 console.log(n);

 //slice//slice out a piece of  an array-doesnt include last item of an array
 let cut =language.slice(1,3);
 console.log(cut);

 //Sorting
 let words = ["banana", "apple", "cherry", "dates"];
 words.sort();
 console.log(words); // ["apple", "banana", "cherry", "dates"]

 let numbers1 = [30, 4, 100, 21];
numbers1.sort((a, b) => a - b); // Ascending order
console.log(numbers1); // [4, 21, 30, 100]

numbers1.sort((a, b) => b - a); // Descending order
console.log(numbers1); // [100, 30, 21, 4]

 let now = new (Date);
 console.log(now);





 


