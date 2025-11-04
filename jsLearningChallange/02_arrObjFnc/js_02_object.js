// singleton object
// Object.create()

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Suman",
    "full name": "Suman Baidya",
    email: "suman@gmeil.com",
    [mySym]: "mykey1",
    location: "Kolkata",
    lang: ["JavaScript", "Python", "C++"],
    addLang: function(newLang) {
        this.lang.push(newLang);
    }
}


// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser.lang);
// jsUser.addLang("Java");
// console.log(jsUser.lang);

// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)
jsUser.email = "suman@ms.com"
// console.log(jsUser.email)

// console.log(jsUser)



jsUser.greeting = function(){
    console.log(`Hello js User ${this.name}`)
}

// jsUser.greeting()






//---------------------------------------------------------------------------------
// singleton object

// const tinderUser = new Object() 
// tinderUser.id = "123abc"
// tinderUser.name = "Suman"
// tinderUser.isLoggedIn = false


// non singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Suman"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "suman@ms.com",
    fullName: {
        userFullName: {
            firstName: "Suman",
            lastName: "Baidya"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4)

const user = [
    {
        userId: 1,
        email: "suman@ms.com",
        name: "Suman"
    },
    {
        userId: 2,
        email: "suman@ms.com",
        name: "Suman"
    },
    {
        userId: 3,
        email: "suman@ms.com",
        name: "Suman"
    }
]

// console.log(user[1].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    courseName: "JavaScript",
    price: "999",
    courseTeacher: "Suman"
}

// console.log(course.courseTeacher)

const {courseTeacher : teacher} = course
// console.log(teacher)


// API...
// {
//     "name": "suman",
//     "courses": "javaScript"
// }

[
    {},
    {},
    {}
]


