const express = require('express')
const { v4: uuidv4 } = require('uuid');
const { rateLimit } = require('express-rate-limit')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')


require('dotenv').config()



const app = express()

app.use(cors(
    {
        origin: 'www.example.com',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        exposedHeaders: ['x-api-key'],
        credentials: true,
    }
))

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

// authorization, authentication

const users = [
    {
        id: "1",
        username: "jhon_doe",
        password: "doe123",
        email: "jhon@gmail.com",
        role: "user",
    }
]


//get all users
app.get('/api/users', (req, res) => {
    res.status(200).json({
        data: users,
        message: "Users fetched successfully",
    })
})
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === id)

    if (!user) {
        return res.status(404).json({ message: "User not found", data: null })
    }
    res.status(200).json({
        data: user,
        message: "Users fetched successfully",
    })
})


//register

app.post('/api/register', async (req, res) => {
    // console.log(req.body);


    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({ message: "Username, password and email are required", data: null })
    }

    //check if user already exists
    const userExists = users.find((user) => user.username === req.body.username.trim() || user.email === req.body.email.trim())

    if (userExists) {
        return res.status(400).json({ message: "User already exists", data: null })
    }

    //hash password
    const hashedPassword = await bcrypt.hash(req.body.password.trim(), 1)

    //   console.log("hashedPassword", hashedPassword);

    //create new user   
    const newUser = {
        id: uuidv4(),
        username: req.body.username.trim(),
        password: hashedPassword,
        email: req.body.email.trim(),
        role: "admin",
    }

    users.push(newUser)
    res.status(201).json({
        data: newUser,
        message: "User created successfully",
    })
})

//login
app.post("/api/login", async (req, res) => {
    // console.log(req.body);
    const user = users.find((user) => user.email === req.body.email.trim())
    if (!user) {
        return res.status(404).json({ message: "Invalid email or password", data: null })
    }

    const isPasswordValid = await bcrypt.compare(req.body.password.trim(), user.password)

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password", data: null })
    }

    //generate token
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role}, process.env.JWT_SECRET, { expiresIn: 60 * 60 }) // 1 hour

    res.status(200).json({
        data: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: token
        },
        message: "User logged in successfully",
    })



})

// middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: "Unauthorized, missing token" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized, invalid token" })
        }
        req.user = decoded
        next()
    }
    )
}

// app.use(verifyToken)
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
            return res.status(400).json({ message: "Invalid sort query", data: null })
        }
    }

    //filter by name
    if (name) {
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
app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find((product) => product.id === id)

    console.log(product);

    if (!product) {
        return res.status(404).json({ message: "Product not found", data: null })
    }
    res.status(200).json({
        data: product,
        message: "Product fetched successfully",
    })

})

//delete product by id
app.delete("/api/products/:id", verifyToken, (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, missing token" })
    }
    const id = req.params.id
    const productIndex = products.findIndex((product) => product.id === id)
    console.log(productIndex);


    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if(decoded.role !== "admin") {
        return res.status(403).json({ message: "Forbidden, you are not allowed to delete this product" })
    }
    
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found", data: null })
    }


    const deletedProduct = products.splice(productIndex, 1)

    res.status(200).json({
        data: deletedProduct,
        message: "Product deleted successfully",
    })
})

//add new product
app.post("/api/products", verifyToken, (req, res) => {

    if (!req.body.name || !req.body.price) {
        return res.status(400).json({ message: "Name and price are required", data: null })

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
app.patch("/api/products/:id", verifyToken, (req, res) => {
    const id = req.params.id
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found", data: null })
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
    console.log(`Example app listening on port ${port}, url: http://localhost:${port}`)
})
