import express from 'express'
const app=express();
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const user={
  name: "Fatima Noor",
  age: 23,
  profession: "Software Developer",
  skills: ["Node.js", "Express", "MongoDB", "EJS"]
}
res.render('index',{user})
})
app.listen(400,()=>{
    console.log('the ejs is running')
})
