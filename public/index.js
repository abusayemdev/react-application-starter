//------------------------------------------ VAR ----------------------------------
// var works globaly and can be repeated

function fun(){
    for (var i = 0; i < 5; i++) {
        console.log(i) //here var variable will work inside and outside this for loop
    }

    console.log(i) //here the var variable also works
};

fun();




//----------------------------------------- LET -------------------------------------

// let works inside the bracket and can be repeated

function fun1(){
    for (let j = 0; j < 5; j++) {
        console.log(j) //here let variable will work only inside this for loop
    }

    //here the let variable doesn't work
};

fun1();


//------------------------------------------ CONST --------------------------------------
//const can not be repeated
const n = 1; // this canst n can not be repeated

