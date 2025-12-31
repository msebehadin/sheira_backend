import express from 'express'

// Simulated product data
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 750 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "Keyboard", price: 80 }
]

const app = express()

// Route to get all products
app.get('/products', (req, res) => {
  res.json(products)
})

// Route to get a product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  res.json(product)
})

export default app
