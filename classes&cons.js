//Classes and constructors//
class Person {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

getdetails() {
    // console.log( `The name of the person is  ${this.name}`)
    console.log(`age of the person is ${this.age}`)
}
}
 let personname = new Person("Charu ",22,"Female");
//  console.log(personname.getdetails()) ;
 console.log(personname.getdetails());

 //Inheritance & method override
 //Inheritance
 class Gadgets {
    constructor( name, model){
        this.name = name;
        this.model = model;
    }
 }

 class Tablet extends Gadgets{
    constructor(name,model){
        super("Lenovo","Version 11.0")
    }
    getdetails(){
        return(`The given Tablet is ${this.name} `)
    }
 }
let device = new Tablet();
console.log(device.getdetails());

//override method

 class Gadgets1 {
    constructor( name, model){
        this.name = name;
        this.model = model;
    }
 
 getdetails(){
    console.log(`The given gadget id ${this.name}`)
 }
 }
 class laptop extends Gadgets1{
    constructor(name,model){
        super(name,model)
    }
    getdetails(){
        console.log(`The given laptop is ${this.name} with the ${this.model} model`)// method override
    }
 }
let laptopname = new laptop("Dell Inspiron", "I5");
laptopname.getdetails();

// ENCAPSULATION

class  Bags {
    constructor(Brand, colour){
          this.Brand = Brand;
          this.colour = colour;
    }
      mentionsize(size){
        this.size = size;
      }
      getdetails(){
        return(`The bag name is ${this.Brand} and the size of the bag is ${this.size}`)
      }
}
  let bags1 = new Bags("American Tourister","Red");
   bags1.mentionsize("Medium");
   console.log(bags1.getdetails());
// abstraction
 class Shape{
    calculatearea(){
        throw new console.error("Implemented in subclass")
    }
 }

  class Rectangle extends Shape{
    constructor(length,breath){
        super()
        this.length =length;
        this.breath = breath;
    }
    calculatearea(){
        return this.length * this.breath
    }
  }
  let Rectanglevalue =new Rectangle(20,5);
  console.log(Rectanglevalue.calculatearea());