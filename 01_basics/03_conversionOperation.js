let score = "33"

//console.log(typeof score);  //string
// console.log(typeof(score)); same as above

let numscore = Number(score)    //converts string or any other to number/int
console.log(typeof numscore);   //number

score = 33
numscore = String(score) 
//console.log(typeof numscore);  
//prints NaN as it is not a valid num

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

// *************** Operations *************

let value = 3
let negValue = -value
// console.log(negValue);   -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);   2 power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);   hello hitesh

// console.log("1" + 2);    12
// console.log(1 + "2");    12  
// console.log("1" + 2 + 2);    122
// console.log(1 + 2 + "2");    32

// console.log( (3 + 4) * 5 % 3);   use parenthesis

// console.log(+true);  not recommended but prints 1
// console.log(+"");    prints 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  //assignment operator

let gameCounter = 100
++gameCounter;     //101
console.log(gameCounter);
// gameCounter++;  //102
console.log(gameCounter++);
console.log(gameCounter);