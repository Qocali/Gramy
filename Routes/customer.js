import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import mongo from "../Models/customer.js";


router.get("/customer", (req, res) => {
    const data = mongo.find({});
    res.send(data);
});
router.post("/customer", async (req, res) => {
    const {path} = req.file;
    const {name, surname, adress, createdAt} = req.body;
    const m = new mongo({name, surname, adress, created_at});
    m.save();
    res.end("ok");
});
router.get("/customer:id", (req, res) => {
    const data = mongo.findById({id: req.params.id});
    res.send(data);
});
router.delete("/customer:id", (req, res) => {
    const data = mongo.findByIdAndUpdate(req.params.id, {IsDeactive: true});
    res.send(data);
});
router.put("/customer:id", (req, res) => {
    const data = mongo.findByIdAndUpdate({
        id: req.params.id
    }, req.body);
    res.send(data);
});
export default router;
