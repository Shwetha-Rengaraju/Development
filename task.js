

/// Task -----------------------------
let arr = [2, 3, 4, 5];


function square(num) {
    return num * num;
}


function cube(num) {
    return num * num * num;
}



const process = (arr, callback ) =>{
    for (let i = 0; i < arr.length; i++);
          callback(arr)
     return ;
}

let squaredArr = process(arr, square);
let cubedArr = process(arr, cube);
console.log(squaredArr);
console.log(cubedArr);