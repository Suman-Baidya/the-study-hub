// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("Found 5")
    }

    // console.log(element)
}


for (let i = 1; i <= 5; i++) {

    // console.log(`Table of: ${i}`)
    
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`Inner loop: ${j} and outer loop: ${i}`)
        // console.log(i + ' * '+ j + " = " + i*j)
        
    }
    
}


let myArray = ['flash', 'batman', 'superman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)    
}



// break and continue
for (let i = 0; i <= 20; i++) {
    if(i==5){
        // console.log(`Detected 5`)
        break;
    }
    // console.log(`Value of i is ${i}`)
       
}
for (let i = 0; i <= 10; i++) {
    if(i==5){
        // console.log(`Not Allowed 5`)
        continue;
    }
    // console.log(`Value of i is ${i}`)
       
}



// while loop

let count = 0;
while (count <= 10) {
    // console.log(`count is ${count}`);
    count = count+2;
}


let superHeroArray = ['flash', 'batman', 'superman']

let arr = 0;
while (arr < superHeroArray.length) {
    const element = superHeroArray[arr];
    // console.log(element)
    arr++;
}


// do while loop

let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 10);
