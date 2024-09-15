//JS is a prototype-based lang and concept of classes are not here just a sense is there that it exists

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  //this refers to instance of that object
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);   prints= {}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

/*
How “new” keyword works:-

1. "new" keyword creates a new empty object or we can say instance.
2. constructor function is called that will have all the arguments
3. "this" keyword is injected in a new instance with all the arguments
4. We will receive the new object instance with all the arguments
*/
