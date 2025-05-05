//function declaration (regular function)
//function expression
// arrow functions

// function sayHi(){
//     console.log("hello cs202"); 
// }
// sayHi()

// function sayHi(username) {
//     console.log("hello " + username); // string concatenation
// }

// sayHi("ibrahim")
// sayHi("aynur")
// sayHi("ruslan")

function sum(num1, num2) {
    let result = num1 + num2;
    return `${num1} + ${num2} = ${result}`; // string interpolation
}

console.log(sum(1, 2));

console.log(sum(23, 5));

console.log(sum(8, 64));


// let a = sum(1, 2);
// console.log(a);

// expression function
const wellcome = function (username) {
    console.log("hello " + username); 
}

wellcome("turqut")

// arrow function


const hello = () =>{
    return "hello cs202"
}

console.log(hello());

// const multiply = (num1, num2) => {
//     return num1 * num2;
// }
const multiply = (num1, num2) =>  num1 * num2;


console.log(multiply(2, 3)); // 6


const square = (number)=> number ** 2
const cube = (number)=> number ** 3

console.log(square(4)); //16
console.log(square(9)); // 81

// function sumOfArrayElements(array){
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//        sum+=array[i]
//     }

//     return sum
// }

// console.log(sumOfArrayElements([20, 40, 73, 85, 64]));
// console.log(sumOfArrayElements([1,2,3]));



function calculateAverage(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
       sum+=array[i]
    }

    let averge = sum / array.length
    return averge
}

console.log(calculateAverage([1,2,3]));
console.log(calculateAverage([40, 70, 50, 20]));


const numbers = [20, 314, 9.81, 37, 98.6, 100, 40, 38, 92] 
let max = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max){
        max = numbers[i]
    }
}
console.log("max", max);

let min = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if(numbers[i] < min){
        min = numbers[i]
    }
}

console.log("min", min);


// object
const student = {
    firstName: "Ibrahim",
    lastName: "Mustafayev",
    age: 20,
    faculty: "IT",
    isMarried: false,
    scores: [50, 70, 40, 90],
    getFullName: function(){
        return this.firstName + " " + this.lastName
    },
    getAverageScore: function(){
        let sum = this.scores[0]
        for (let i = 1; i < this.scores.length; i++) {
            sum+=this.scores[i]
        }

        return `average score is ${sum / this.scores.length}`
    },
}

console.log(student.getFullName());
console.log(student.getAverageScore());




