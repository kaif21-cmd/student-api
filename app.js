const express=require("express")
require("./db/conn");
const Student=require("./models/students");

const app=express();
const port=process.env.PORT || 8000;

app.use(express.json());

/*app.get("/",(req,res)=>{
res.send("Hello from the kaif shaikh api")
})
*/
//create a new student..
app.post("/students",(req,res)=>{
  console.log(req.body);
  const user =new Student(req.body); //get the data from the body

  user.save().then(()=>{
    res.status(201);
    res.send(user); // save the database
  }).catch((e)=>{
    res.status(400).send(e);
  })
  
})
app.listen(port,()=>{
    console.log(`Server is connected succesfully at ${port}`)
})