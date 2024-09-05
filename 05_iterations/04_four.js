// for-in loops used on objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);       //prints all key values
    
    // console.log(`${key} shortcut is for ${myObject[key]}`);   //printing keys and values
}

//for-in loops on array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);    prints values of array
    //console.log(key);     prints indexes as array has also its keys which are its indexes thats why object was made so that we can make our custom keys
}

//for-in loops are not possible in maps it dosent gives error but prints nothing as maps are not iteratable...learn later

// Note : for objects we use for-in loops
//for arrays we use for-of loops or for-each loops