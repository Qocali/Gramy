import express from 'express';
const router = express.Router()
import mongo from "../Models/Coins.js";
const app=express();
router.get("/Coin",(req,res)=>{
  const data= mongo.find({})
  res.send(data);
})
router.post("/Coin",async (req,res)=>{
  const m = new mongo(req.body);
  m.save();
})
router.get("/Coin:id",(req,res)=>{
   const data= mongo.findById({id:req.params.id})
   res.send(data);
})
export default router;

