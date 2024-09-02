const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); here it prints all the curr context i.e, all the values presents
    }

}

//this refers to current context 
// user.welcomeMessage()    //prints with hitesh
// user.username = "sam"
// user.welcomeMessage()    //prints with sam

console.log(this);  //prints {} as it is presents in node environment and refers to empty obj while the same line when executed in browser it gives whindow which is a global obj 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  prints undefined as 'this' cannot be used in func but only with objects 
// }

// chai()

// const chai = function () {
    //     let username = "hitesh"
    //     console.log(this.username);
    // }
   
// chai()   still prints undefined

 // Func declaration with arrow func

 const chai =  () => {      //doesnt uses function keyword
    let username = "hitesh"
    console.log(this);
}

// chai()

//Basic arrow fun
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

//Implicit return 
//it means if wrapped inside curly braces we need to write return keyword else if it is one line or wrapped inside () then no need of return
//Explicit return - when using return keyword
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})// to return an obj

console.log(addTwo(3,5));
