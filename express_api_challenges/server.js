import express from 'express'
import 
const app=express();
const PORT=5000;
app.get('/',(req,res)=>{
    console.log('welcome to mohammed')
    res.json({message:'welcome to sheira backend'})
})
app.use('/',productRoute)
app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})