//Object Constructor- declaration

// const tinderUser = new Object() //creates singleton obj
const tinderUser = {}   //same meaning as above but non singleton   

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//Objects nesting

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "suru",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//Object combine
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }  //creates obj in obj
// const obj4 = Object.assign({}, obj1, obj2, obj3) 
// {} is target and rest other are source
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3} //mostly used same as assign spread operator
// console.log(obj4);

//values coming from db comes in form of array of objects

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email  //to access arr of obj
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    gives all keys in form of arr
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //gives all key val in form of arr

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//t/f to check if that key exists

//de-structuring of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  //normal accessing

const {courseInstructor: instructor} = course
//  ---- what to access --- shortname =  from which obj
// console.log(courseInstructor);
console.log(instructor);       //object is destructured

// JSON API
//structure of JSON in this keys,values are in string format
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

//api in array format
[
    {},
    {},
    {}
]