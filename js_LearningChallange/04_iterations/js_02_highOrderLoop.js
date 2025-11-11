// for of loop

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [10, 20, 30, 40, 50];

for (let num of arr) {
    // console.log(num);
}

const greeting = "Hello World";

for (let char of greeting) {
    // console.log(char);
}


// Map method

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');

// console.log(map);

for(const [key, value] of map){
    // console.log(key, value);
}

for (const key in map) {
    console.log(key);  // for in loop not work with map
}


const myObject = {
    'game1': 'chess',
    'game2': 'football',
    'game3': 'cricket'
}

for (const [key, value] of Object.entries(myObject)) {  // direct object not iterable so we use Object.entries to convert into array
    // console.log(key, value);
}




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                              for in loop
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myObjLanguage = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java'
}

for (const key in myObjLanguage) {
    // console.log(`Key is ${key} and value is ${myObjLanguage[key]}`);
}


const myArrayLang = ['JavaScript', 'Python', 'Ruby', 'Java']
for (const index in myArrayLang) {
    // console.log(`Index is ${index} and value is ${myArrayLang[index]}`);
}





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                              for each loop
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const languages = ['JavaScript', 'Python', 'Ruby', 'Java']

languages.forEach(function(lang, index){  // higher order function
    // console.log(`Index is ${index} and value is ${lang}`);
})

function printMe(item){
    console.log(`Value is ${item}`);
}

// languages.forEach(printMe);  // higher order function

languages.forEach((lang, index, arr) => {
    // console.log(`Index is ${index} and value is ${lang}`);
    // console.log(arr);
})


const myCodingObj = [
    {name: 'JavaScript', type: 'Frontend'},
    {name: 'Python', type: 'Backend'},
    {name: 'Ruby', type: 'Backend'},
    {name: 'Java', type: 'Backend'}
]

myCodingObj.forEach(function(codingLang){
    console.log(`Language Name is ${codingLang.name} and type is ${codingLang.type}`);
})

