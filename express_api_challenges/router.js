import express  from 'express'
// create simulated product data
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 750 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Keyboard", price: 80 }
];
const app=express();
app.get('/products',(req,res)=>{
    req.json(products)
})
app.get('/products/:id',(req,res)=>{
    const id= parseInt(req.params.id)
    const product=products.find(p=>p.id===id)
    if(!product){
        res.status.res.json({message:'product not found'})
    }
    req.json(product)
})