// string methods

let str = "Hello World"

console.log(str.length);

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(2, 4));
console.log(str.startsWith("a")); //false
console.log(str.startsWith("Hello")); //true
console.log(str.includes("a")); //false
console.log(str.split(" "));


console.log("hello".split(""));
console.log("a-b-c-d".split("-"));


console.log("           ejasdkajsnd       ".trim());

// strings are immutable

let username = "mehriban"

// Verilmiş cümlədə neçə ədəd boşluq olduğunu tapan funksiya yazın.

function countOfSpaces(senteces){
    let count = 0

    for (let i = 0; i < senteces.length; i++) {
        if(senteces[i] === " "){
            count++
        }
    }

    return count
}

console.log(countOfSpaces("lorem ipsum dolor"));
console.log(countOfSpaces("hello world"));

// reverseString("salam") funksiyası yazın. Verilmiş string-i tərsinə çevirsin.

function reverseString(str){
    let reverse = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]
    }

    return reverse
}

console.log(reverseString("salam")); //malas
console.log(reverseString("abc")); //cba


// capitalize funksiyası yazın. Verilmiş cümlədəki bütün sözlərin ilk hərfini böyük hərf etsin.
// Giriş: "salam dunya" → Çıxış: "Salam Dunya"


function capitalizeEachWord(sentence){
    let arrayOfWords =  sentence.split(" ")
    let arr = []
    for (let i = 0; i < arrayOfWords.length; i++) {
        arr.push(arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1))
       }
    return arr.join(" ")       
}

console.log(capitalizeEachWord("hello world")); // Hello World
console.log(capitalizeEachWord("cyber security")); // Cyber Security

