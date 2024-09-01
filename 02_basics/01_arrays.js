// array declaration

const myArr = [0, 1, 2, 3, 4, 5]    
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   //add elt
// myArr.push(7)
// myArr.pop()  //removes last val
// console.log(myArr);     //prints whole arr

// myArr.unshift(9) adds val in starting and shifts all elt one pos ahead it is costly
// myArr.shift()    removes first elt and shifts forward

// console.log(myArr.includes(9));  gives t/f
// console.log(myArr.indexOf(79));     -1
// console.log(myArr.indexOf(3));     3

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);    //is string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //prints 1 and 2, slice doesnt change arr

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //prints 1,2,3 but modifies original arr by removing those indexes
console.log(myn2);
console.log("C ", myArr);