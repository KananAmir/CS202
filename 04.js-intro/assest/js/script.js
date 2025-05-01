console.log("Hello World")
// variables


// let, const, var

// console.log(username); //error

// data types
let username = "John Doe" //string

username = "Turqut Huseyinzada" //string

const pi = 3.14 //const

let age = 30 //number
let isStudent = true //boolean

// let password = null;
let user; // undefined

let firstFruit = "apple"
let secondFruit = "banana"
let thirdFruit = "orange"
//reference types
// array, object, function
let fruits = ["apple", "banana", "orange"] // array
let students = ["ibrahim", "sabir", "elnar", "kamal", "shahbaz", "laman", "aynur", "sedric"] // array
let scores = [10, 20, 30] // array

// [] //array
// {} // object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "sports"],
    address: {
        city: "New York",
        country: "USA"
    },
}; // object

// console.log(username)
console.log("username", username)

console.log(`Hello ${username}`);

console.log(age);
console.log(students);
console.log(students.length);
console.log(students[1]);
console.log(students[2]);
console.log(students[students.length - 1]);
console.log(students[students.length]);


console.log(person);
// console.log(person.name);
console.log(person["name"]);
console.log(person.hobbies);


// operators

// arithmetic operators
let a = 125
let b = 20
let sum = a + b
let sub = a - b
let mul = a * b
let div = a / b
let mod = a % b

let count = 10
// count = count + 1 
// count++


// count = count - 5
// count-=5


// count = count ** 2 // 10*10 = 100
count = count ** 3 // 10*10*10 = 1000
count = count ** 4 // 10*10*10*10 = 10000

console.log("count", count);

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

//comparison operators

let firstNumber = 10
let secondNumber = "10"

console.log(firstNumber == secondNumber); // true
console.log(firstNumber === secondNumber); // false
console.log(firstNumber != secondNumber); // false

console.log(typeof firstNumber); // number
console.log(typeof secondNumber); // string


console.log("A" > "B"); // false
console.log("A" < "B"); // true



// alert, confirm, prompt


// window.alert("Hello World")
// let bool = window.confirm("Are you sure?")

// console.log(bool);  // true or false

// let name = window.prompt("Enter your name", "John Doe")

// console.log(name);


let first = window.prompt("enter first number", "0")
let second = window.prompt("enter second number", "0")

// let cem = + first + +second

// console.log(cem); // 10 + 20 = 30

// window.alert(`Sum: ${cem}`)
let operation = window.prompt("enter operation", "*")


let result = 0
if(operation == "+"){
    result = +first + +second
}else if(operation == "-"){
    result = +first - +second
}
else if(operation == "*"){
    result = +first * +second   
}
else if(operation == "/"){
    result = +first / +second   
}else{
    window.alert("Invalid operation")
}

window.alert(`Result: ${result}`)