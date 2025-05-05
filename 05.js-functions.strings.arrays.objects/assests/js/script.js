let isRaining = false
if (isRaining === true) {
  console.log('Remember to take your rain coat.')
}else{
    console.log('No need for a rain coat.')
}

let number = 10
if (number > 0) {
  console.log('The number is positive.')
}else if (number < 0) {
  console.log('The number is negative.')
}else{
  console.log('The number is zero.')
}

// Switch statement example

// let day = 5

// let day = +prompt("Enter a number between 0 and 6: ", "0-6"); 

// switch (day) {
//     case 1:
//         console.log("Today is Monday.");
//         break;
//     case 2:
//         console.log("Today is Tuesday.");
//         break;
//     case 3:
//         console.log("Today is Wednesday.");
//         break;
//     case 4:
//         console.log("Today is Thursday.");
//         break;
//     case 5:
//         console.log("Today is Friday.");
//         break;
//     case 6:
//         console.log("Today is Saturday.");
//         break;
//     case 0:
//         console.log("Today is Sunday.");
//         break;
//     default:
//         console.log("Invalid day.");
//         break;
// }

// Ternary operator example
const user = {
    name: 'John',
    age: 25,
    isStudent: false
}
// let canVote = age >= 18 ? "You can vote." : "You cannot vote yet."
user.age >= 18 ? console.log("You can vote.") : console.log("You cannot vote yet.");



// if(user.age >= 18){
//     console.log("You can vote.")
// }else{
//     console.log("You cannot vote yet.")
// }

// loops

// for (let i = 1; i <= 100; i = i + 2 ) {
//     console.log(i);   
// }

//only odd numbers
// for (let i = 1; i <= 100; i++ ) {
//     if(i % 2 === 0) {
//         console.log(i); 
//     }
// }

let sampleText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio provident mollitia, at assumenda accusantium repudiandae architecto, nihil incidunt ipsam, sunt dolorem rem! Alias laudantium ipsa sunt atque, reiciendis consectetur fugit"

console.log(sampleText.length); // length of the string

// for (let i = 0; i < sampleText.length; i++) {
//     console.log(sampleText[i]);
// }

let countA = 0;

for (let i = 0; i < sampleText.length; i++) {
    if(sampleText[i] === 'a' || sampleText[i] === 'A') {
        countA = countA + 1
    }
}

console.log(countA);



const scores = [70, 58, 90, 100, 85, 95, 80, 75, 60, 88]

let sum = 0
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i]
}

let average = sum / scores.length
console.log("average", average);

