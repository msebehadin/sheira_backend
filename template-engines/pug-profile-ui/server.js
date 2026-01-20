import express from 'express'
const app=express()
app.get('/',(req,res)=>{
const user={
  name: "Fatima Noor",
  age: 23,
  profession: "Software Developer",
  skills: ["Node.js", "Express", "MongoDB", "EJS"]
}

})
app.listen(4000,()=>{
    console.log('pug is running')
})