// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);     //is object

let myCreatedDate = new Date(2023, 0, 23)    //to declare a date 0 is jan - 1/23/2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //for more specific declaration
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14")   yyyy-mm-dd syntax
// let myCreatedDate = new Date("01-14-2023")   mm-dd-yyyy

let myTimeStamp = Date.now()    //gives instant tym in milisecond from 1 jan 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());    //gives tym in ms from your created date
// console.log(Math.floor(Date.now()/1000));    //to calculate in seconds

let newDate = new Date()
console.log(newDate);   //prints current date
console.log(newDate.getMonth() + 1); //gives curr month +1 to get exact as it starts from 0
console.log(newDate.getDay());   //gets day of curr date

// console.log(`${newDate.getMonth()+1} and the time is ${myTimeStamp.toLocaleString()}`)

//to customize dates
newDate.toLocaleString('default', {
    weekday: "long",
    
})