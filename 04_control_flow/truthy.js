// truthy-means just assume val is true
//falsy-means assume val is false

// const userEmail = "suru@chi.com"    //true
// const userEmail = ""                //false  
// const userEmail = []                //true   

//truthy
// if (userEmail) {    
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values => Ex-  false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values => Ex- all rest and "0", 'false', " ", [], {}, function(){}

//to check array is empty
// if (userEmail.length === 0) {
//     // console.log("Array is empty");
// }

//to check obj is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

false==0    //true
false==''   //true
0==''       //true

//new operator
// Nullish Coalescing Operator (??): works on null ,undefined

let val1;       
// val1 = 5 ?? 10       prints 5
// val1 = null ?? 10    prints 10
// val1 = undefined ?? 15  prints 15
// val1 = null ?? 10 ?? 20     prints 10

console.log(val1);



// Terniary Operator

// Syntax => condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")