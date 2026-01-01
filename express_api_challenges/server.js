import express from 'express'
import ProductRoute from './router.js'
import FruitRoute from './crudServer.js'
const app=express();
const PORT=5000;
app.get('/',(req,res)=>{
    console.log('welcome to mohammed')
    res.json({message:'welcome to sheira backend'})
})
app.use('/',ProductRoute)
app.use('/',FruitRoute)
app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})