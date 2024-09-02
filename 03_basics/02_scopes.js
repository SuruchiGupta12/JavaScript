//var c = 300   var is not used becoz it doesnt follow rules of scope
let a = 100
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);       prints 10
    // var c=30
}


// console.log(a);   //prints 100//  a follows its scope
// console.log(b);      same with b
// console.log(c);     30 // but c not because it is var

//  Nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()
//Checking scopes
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);    gives error as website is local
}

// console.log(username);   gives error as username is in local scope of if

// ++++++++++++++++++ interesting ++++++++++++++++++


addone(5)   //gives no error and prints 6
function addone(num){       //this is simple func
    return num + 1
}

console.log(addone(5))


addTwo(5)   //gives error becoz var is declared later aka hoisting learn later
const addTwo = function(num){   //known as expression as var is holdind func
    return num + 2
}
addTwo(5)   //no error