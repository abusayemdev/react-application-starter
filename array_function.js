//----------------------- Array Function ---------------------------

//simple function
function fn(n) {
    return n;
}

console.log(fn('Simple Function'));


//variable function
var a = function fn1(n){
    return n;
}

console.log(a('Variable Funciton'))


//variable function without function name 
var b = function (n){
    return n;
}

console.log(b('Variable Funciton without fucntion name'))


//Array Function
let c = (n) => {return n;} // Array sign instead of function text and first bracket is before the array sign
console.log(c('Array Function'))


//Array Function without bracket and return 
let d = n => n; 
console.log(d('Array Function without bracket and return'))


//Array Function short with 2 params
let e = (n,m) => n+m; //first bracket before the array sign is required
console.log(e(3,5))