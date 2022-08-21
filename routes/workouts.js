const express=require("express")
const Workout=require("../models/Workout")
const router=express.Router();


// get all workouts
router.get("/",(req,res)=>{
    res.json({mssg:"get all workouts"});
})


// get a single workout
router.get("/:id",(req,res)=>{
    res.json({mssg:"get a single workout"});
})


// post a new workout
router.post("/",async (req,res)=>{
    const { title, load, reps}=req.body;
    try{
        const workout=await Workout.create({ title, load, reps});
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

// delete a new workout
router.delete("/:id",(req,res)=>{
    res.json({mssg:"delete  a new workout"});
})

//update a workout
router.patch("/:id",(req,res)=>{
    res.json({mssg:"update a  workout"});
})


module.exports=router

