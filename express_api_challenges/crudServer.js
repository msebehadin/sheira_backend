import express from "express";

const app = express();
app.use(express.Router());

const fruits = [
  { id: 1, name: "banana", price: 1000 },
  { id: 2, name: "orange", price: 500 },
  { id: 3, name: "mango", price: 750 },
  { id: 4, name: "avocado", price: 300 },
  { id: 5, name: "pineapple", price: 80 },
];

// Get all fruits
app.get("/fruits", (req, res) => {
  res.json(fruits);
});

// Get a fruit by ID
app.get('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const fruit = fruits.find(p => p.id === id)

  if (!fruit) {
    return res.status(404).json({ message: 'fruit not found' })
  }

  res.json(fruit)
})

// Add a new fruit
app.post("/fruits", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price required" });
  }
  const newFruit = { id: fruits.length + 1, name, price };
  fruits.push(newFruit);
  res.status(201).json(newFruit);
});

// Update a fruit
app.put("/fruits/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const fruit = fruits.find(f => f.id === id);
  if (!fruit) return res.status(404).json({ message: "Fruit not found" });

  if (name) fruit.name = name;
  if (price) fruit.price = price;
  res.json(fruit);
});

// Delete a fruit
app.delete("/fruits/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = fruits.findIndex(f => f.id === id);
  if (index === -1) return res.status(404).json({ message: "Fruit not found" });

  const deleted = fruits.splice(index, 1);
  res.json({ message: "Fruit deleted", fruit: deleted[0] });
});

export default app;
