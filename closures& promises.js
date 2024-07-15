//Closures 
let product = function(Bag){
    let name = Bag;
 
    this.getproductName =function(){
        return name
    };

}
 let product1 = new product("Lavie");
 console.log(product1.getproductName());

 //------------------------------------------

 function  person (){
    let details={Name :"Shwetha", Gender:"female"};

 return function(){
    console.log(details.Name + " is a good human ");
 }
}

 let Closures =person();
 console.log(Closures());
//---------------------------
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if(success){
            resolve("The project is Successful")
        }
        else{
            reject("The project is a failure")
        } 
    }, 5000);
})
promise
.then((Notify) =>{
    console.log(Notify ," : Success ");
})
.catch((error) =>{
console.log(error," : Failure ");
})



