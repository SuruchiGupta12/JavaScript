// Immediately Invoked Function Expressions (IIFE)

//used s.t no/removing disturbance/pollution of global scope in func and immediately activating some func

function chai(){
    console.log(`DB CONNECTED`);
};
chai()  //normal call

//iife func call 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ()() syntax of iife
//to end iife we need to put semicolon at end of func s.t no error comes next tym

//arrow func in iife
( (name) => {
    //Simple iife
    console.log(`DB CONNECTED TWO ${name}`);    //expecting a variable
} )('hitesh')

//two iife can be written by putting ';'  on end of one to avoid error