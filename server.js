require("dotenv").config()
const workoutRoutes=require("./routes/workouts")
const express=require("express")
const mongoose=require("mongoose");
const app=express()

// middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})


app.use("/api/workouts",workoutRoutes);

mongoose.connect(process.env.MONG_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("your server is running at port ",process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error);
})

