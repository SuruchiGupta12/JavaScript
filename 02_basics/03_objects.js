//object can be declared as literals & constructors

// singleton is made by constructors not literals
// Object.create- to create constructor obj


//Object Literals
const mySym = Symbol("key1")    //declare symbol

const JsUser = {
    name: "Hitesh",     //by default key is treated as string internally like "name": "Hitesh"
    "full name": "Hitesh Choudhary",    //this type of cannot be accessed with dot
    [mySym]: "mykey1",      //using symbol as key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
//both ways to access
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   //to access symbol

JsUser.email = "hitesh@chatgpt.com" //changes val
// Object.freeze(JsUser)    //obj cannot be changed once freezed
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){   //adding a func in obj
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    //this is used to reference same object key
}

console.log(JsUser.greetingTwo());