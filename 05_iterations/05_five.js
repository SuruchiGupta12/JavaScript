//for-each loop: this is directly added to arrays as a property and this is a higher order func 
// ["", "", ""]
// [{},{},{}]

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){     //no name in fun
    //console.log(val);
} )


//for-each with arrow func
coding.forEach( (item) => {
   // console.log(item);
} )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)      //func(only reference) passed in as a callback func

// coding.forEach( (item, index, arr)=> {   //can has 3 parameters- iterator name, index and whole array
    //     console.log(item, index, arr);
    // } 

//Iterations on array of objects using for-each

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

//NOTE : this is imp because data coming from db comes in forms of array and every elt is an object which is an array of objects