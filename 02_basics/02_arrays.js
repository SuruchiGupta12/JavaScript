const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //pushes arr as an elt

// console.log(marvel_heros);
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);     o/p is flash
// console.log(marvel_heros.length);   4


// const allHeros = marvel_heros.concat(dc_heros)       
// adds both arr
// console.log(allHeros);   

const all_new_heros = [...marvel_heros, ...dc_heros]
//known as spread operator
//different and easy way to concat,here every elt spreads out and becomes individual and all are merged together

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//it spreads out all nesting of array to infinite depth
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))    //checks if it is an arr
console.log(Array.from("Hitesh"))   //converts anything into arr

console.log(Array.from({name: "hitesh"})) // interesting as it gives an empty arr because not mentioned on what basis we need to convert this obj into arr

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //return new arr from set of elts