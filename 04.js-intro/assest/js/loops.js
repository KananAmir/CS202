let groupName = "cs202"

console.log(groupName[0]);


//for loop
//while loop


// for(start, condition, steps){
//     // code block
// }

// for(let i = 0; i < 10; i){
//     console.log(i);
// }

for(let i = 0; i < 2; i = i + 1){
    console.log("hello");
}


let count = 0

while(count < 100){
    console.log(count);
    count = count + 1
}

// do {
//     console.log(count);
//     count = count + 1
// }
// while(count < 100)

for (let i = 100; i> 0;  i = i - 2) {
    console.log(i);
}

const students = ["Ali", "Ahmed", "Sara", "Aisha", "Hassan"]

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}   

let str = "aabbbcccc"

let countB = 0
for(let i = 0; i < str.length; i++){
    if(str[i] === "b"){
        countB = countB + 1
    }
}

console.log(countB);
