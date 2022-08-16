import express from "express";
import path from "path";
const router = express.Router();
const app = express();
import mongo from "../rcategory.js/order.js";


router.get("/order", (req, res) => {
    const data = mongo.find({});
    res.send(data);
});
router.post("/order", async (req, res) => {
    const {path} = req.file;
    const {name, surname, adress, createdAt} = req.body;
    const m = new mongo({name, surname, adress, created_at});
    m.save();
    res.end("ok");
});
router.get("/order:id", (req, res) => {
    const data = mongo.findById({id: req.params.id});
    res.send(data);
});
router.delete("/order:id", (req, res) => {
    const data = mongo.findByIdAndUpdate(req.params.id, {IsDeactive: true});
    res.send(data);
});
router.put("/order:id", (req, res) => {
    const data = mongo.findByIdAndUpdate({
        id: req.params.id
    }, req.body);
    res.send(data);
});
export default router;
