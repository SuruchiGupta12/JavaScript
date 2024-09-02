//func is used to perform similar task any no of times

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("U");
    console.log("C");
    console.log("H");
    console.log("I");
}

// sayMyName    reference of fun
// sayMyName()  //execution of fun

function addTwoNumbers(number1, number2){   

    // console.log(number1 + number2);
}

// addTwoNumbers(3,4)  7
// addTwoNumbers(3,"4")    34
// addTwoNumbers(3,null)   3

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);     gives undefined as here fun is not returning anything

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    //OR
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);     prints 8

function loginUserMessage(username){    //pass (username = "sam")   if nothing is passed this is default
    if(username === undefined ){ // !username)  //to check if username is valid string or not
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("suruchi"))
// console.log(loginUserMessage())  if value is not passed it prints undefined

function calculateCartPrice(...num1){   //known as rest/spread operator as we dont know how many parameters are there
    return num1     //returns any no of arguments in form of array
}

console.log(calculateCartPrice(2))  //prints 2
console.log(calculateCartPrice(200, 400, 500, 2000))
//O/p - [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) //prints [500,2000] as 200,500 is gone under val1,val2 and num1 is returned with rest all values

// Passing objects in func

const user = {      //creating obj
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){   //obj as parameter
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   func call

handleObject({      //passing direct obj as arg in fun call
    username: "sam",
    price: 399
})

//Passing array as arg in func

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  prints 400
console.log(returnSecondValue([200, 400, 500, 1000]));  //passing whole array direct as arg