let score = "33"

console.log(typeof score);  //string
// console.log(typeof(score)); same as above

let numscore = Number(score)    //converts string or any other to number/int
console.log(typeof numscore);   //number

score = 33
numscore = String(score) 
console.log(typeof numscore);  //prints NaN as it is not a valid num

// "33" => 33
// "33abc" => NaN but type is number
// if score = null then o/p is 0
//for undefined it is NaN
//for boolean true-1 and false-0

// coneversion can be done in Number(), String(), Boolean()

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

