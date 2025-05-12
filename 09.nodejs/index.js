const express = require('express')
const { v4: uuidv4 } = require('uuid');
const { rateLimit } = require('express-rate-limit')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080
const products = [
    {
        id: "1",
        name: "iPhone 13",
        price: 899
    },
    {
        id: "2",
        name: "Samsung Galaxy S21",
        price: 799
    },
    {
        id: "3",
        name: "Google Pixel 7",
        price: 699
    },
    {
        id: "4",
        name: "OnePlus 9 Pro",
        price: 749
    },
    {
        id: "5",
        name: "Xiaomi Mi 11",
        price: 649
    }
];

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 1 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// let isAuthenticated = true
//midlleware
// const loggerMiddleware = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     if(isAuthenticated === true){
//         next()
//     } 
// }

//verify api key middlewar
const verifyApiKey = (req, res, next) => {
    const apiKey = req.header('x-api-key')
    if (!apiKey) {
        return res.status(401).json({ message: "Unauthorized, missing API key" })
    }
    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: "Unauthorized, invalid API key" })
    }
    
    next()

}

app.use(verifyApiKey)
// app.use(loggerMiddleware)
app.use(limiter)
app.use(express.json())

// app.get('/', (req, res) => {
//   res.json('Hello World!')
// })
// app.get('/users', (req, res) => {
//   res.json([{id: 1, username: "jhon"}, {id: 2, username: "doe"}])
// })

//get, post, delete, put (patch)

// CRUD - create, read, update, delete


//get all products
app.get('/api/products', (req, res) => {

    const { name, sort } = req.query
    if (sort) {
        if (sort === "asc") {
           return res.status(200).json({
                data: products.toSorted((a, b) => a.price - b.price),
                message: "Products fetched successfully",
            })
        } else if (sort === "desc") {
            return res.status(200).json({
                data: products.toSorted((a, b) => b.price - a.price),   
                message: "Products fetched successfully",
            })
        } else {
            return res.status(400).json({message: "Invalid sort query", data: null})
        }
    }

    //filter by name
    if(name){
        const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
       res.status(200).json({
            data: filteredProducts,
            message: "Products fetched successfully",
        })
    }
    
    res.status(200).json({
        data: products,
        message: "Products fetched successfully",
    })
})

//get product by id
app.get('/api/products/:id', (req, res) =>{
    const id = req.params.id
   const product = products.find((product) => product.id === id)

   console.log(product);
   
    if(!product){
        return res.status(404).json({message: "Product not found", data: null})
    }
    res.status(200).json({
        data: product,
        message: "Product fetched successfully",
    })
    
})

//delete product by id

app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id
    const productIndex = products.findIndex((product) => product.id === id)
    console.log(productIndex);
    

    if(productIndex === -1){
        return res.status(404).json({message: "Product not found", data: null})
    }
    const deletedProduct = products.splice(productIndex, 1)

    res.status(200).json({
        data: deletedProduct,
        message: "Product deleted successfully",
    })
})

//add new product

app.post("/api/products", (req, res)=>{

    if (!req.body.name || !req.body.price) {
        return res.status(400).json({message: "Name and price are required", data: null})
        
    }
    
    const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price
    }

    products.push(newProduct)
    res.status(201).json({
        data: newProduct,
        message: "Product created successfully",
    })

})

//update product by id

app.patch("/api/products/:id", (req, res) => {
    const id = req.params.id
    const productIndex = products.findIndex((product) => product.id === id)
    if(productIndex === -1){
        return res.status(404).json({message: "Product not found", data: null})
    }
    const updatedProduct = {
        id: id,
        name: req.body.name || products[productIndex].name,
        price: req.body.price || products[productIndex].price
    }
    products[productIndex] = updatedProduct
    res.status(200).json({
        data: updatedProduct,
        message: "Product updated successfully",
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
