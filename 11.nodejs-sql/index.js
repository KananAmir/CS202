const express = require('express')
require('dotenv').config()
const mysql = require('mysql2')

const app = express()


const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create the connection to database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    })

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err)
        return
    }
    console.log('Connected to the database')
})

// app.get('/message', (req, res) => {
//   res.json({ message: 'Hello World!' })
// })

//get all products

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error fetching products:', err)
            res.status(500).json({ error: 'Internal Server Error' })
            return
        }
        res.json({
            message: 'Products fetched successfully',
            data: results
        })
    })
}
)

//get product by id
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id
    db.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
        if (err) {
            console.error('Error fetching product:', err)
            res.status(500).json({ error: 'Internal Server Error' })
            return
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Product not found' })
            return
        }

        res.json({
            message: 'Product fetched successfully',
            data: results[0]
        })
    })
})

// delete product by id

app.delete('/api/products/:id', (req, res) => {
    const productId = req.params.id
    db.query('DELETE FROM products WHERE id = ?', [productId], (err, results) => {
        if (err) {
            console.error('Error deleting product:', err)
            res.status(500).json({ error: 'Internal Server Error' })
            return
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' })
            return
        }

        res.json({
            message: 'Product deleted successfully',
            data: results[0]
        })
    })
})

// add product

app.post('/api/products', (req, res) => {
    // const { name, description } = req.body
    const name = req.body.name
    const description = req.body.description
    db.query('INSERT INTO products (name, description) VALUES (?, ?)', [name, description], (err, results) => {
        if (err) {
            console.error('Error adding product:', err)
            res.status(500).json({ error: 'Internal Server Error' })
            return
        }
        res.json({
            message: 'Product added successfully',
            data: { id: results.insertId, name, description }
        })
    })
}
)

// update product by id

app.put('/api/products/:id', (req, res) => {
    const productId = req.params.id
    const { name, description } = req.body
    db.query('UPDATE products SET name = ?, description = ? WHERE id = ?', [name, description, productId], (err, results) => {
        if (err) {
            console.error('Error updating product:', err)
            res.status(500).json({ error: 'Internal Server Error' })
            return
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Product not found' })
            return
        }

        res.json({
            message: 'Product updated successfully',
            data: { id: productId, name, description }
        })
    })
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, http://localhost:8080/api/`)
})