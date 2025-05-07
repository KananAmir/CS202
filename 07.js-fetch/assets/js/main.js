// API - application programming interface

//fetch api
//promise

const promise = new Promise((resolve, reject) => {
    let age = 17;
    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
})
// promise states: pending, fulfilled, rejected
//then, catch, finally

// promise.then((response)=>{
//     console.log(response);

// }).catch((err)=>{
//     console.log(err);

// })

// console.log(promise);

console.log(1);
console.log(2);
console.log(3);


// fetch("https://northwind.vercel.app/api/categories").then((response) => {
//     return response.json()
// }).then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// fetch("https://northwind.vercel.app/api/suppliers").then((response) => {
//     return response.json()
// }).then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// fetch("https://northwind.vercel.app/api/products").then((response) => {
//     return response.json()
// }).then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })




    //methods: GET, POST, PUT, PATCH, DELETE
    //status code

    //async wait

//  async function getData() {
//     try {
//         const response = await fetch("https://northwind.vercel.app/api/categories");
//         const data = await response.json();
//         console.log(data);  
//     } catch (error) {
//         console.log(log);  
//     }
//  }

//  getData()
 async function getData(endpoint) {
    try {
        const response = await fetch(`https://northwind.vercel.app/api/${endpoint}`);
        const data = await response.json();
        console.log(data);  
    } catch (error) {
        console.log(log);  
    }
 }

 getData("categories")
 getData("customers")
 getData("suppliers")
 getData("orders")