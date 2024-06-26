//1

let bag ={
    Brandname :"American Tourister",
    Model : "s22",
    Colour : "Blue",
    Manufactureddate:"July,2024" 
}
//2
let bag1 ={
    Brandname :"American Tourister",
    Model : "s22",
    Colour : "Blue",
    Manufactureddate:"July,2024" ,
    fullname : function(){
        return this.Brandname+" "+this.Model;
    }
}
 console.log(bag1.fullname());
//3
const Phone = {
  Product :  "iPhone",
  Model : "14 ProMax"
}
Phone.Product = "Oppo";
console.log(Phone.Product);
//4
 const person ={
     Name : "Kavirajani",
     Surname: "Ganesan",
     Age : 23
 }
  delete person.Age;
  console.log(person); 