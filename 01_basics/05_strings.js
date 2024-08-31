const name = "Suru"
const repoCount = 2

// console.log(name + repoCount + 2) syntax not used nowadays

console.log(`Hello I am ${name} and i have ${repoCount} repo in my github`);    //to print string

const gameName = new String('hitesh-hc-com')    //declare string

// console.log(gameName[0]);    to access each pos char
// console.log(gameName.__proto__); to access protot ypes


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //reverse substr

console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());   //removes whitespaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //true/false

console.log(gameName.split('-'));   //changes into array