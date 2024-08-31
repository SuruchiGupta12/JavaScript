// Numbers

const score = 400
//  console.log(score);    can be declared in this way here o/p is 400

// const balance = new Number(100) //op- [Number: 100]
//  console.log(balance);

// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));     //100.00

const otherNumber = 23.8966     //23.9
const otherNumber1 = 123.8966     //124

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   //10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);   //Object [Math] {}
// console.log(Math.abs(-4));   //4
// console.log(Math.round(4.3));    //4
// console.log(Math.round(4.6));    //5
// console.log(Math.ceil(4.2));     //ceil is top 5
// console.log(Math.floor(4.9));    //floor is down 4
// console.log(Math.min(4, 3, 6, 8));   //3
// console.log(Math.max(4, 3, 6, 8));   //8

console.log(Math.random()); //gives random val b/w 0-1
console.log((Math.random()*10) + 1);    //min val is 1-9
console.log(Math.floor(Math.random()*10) + 1);  //floor is used to get only single val

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //to get val b/w min and max and add 1 to avoid 0 val