import express from "express";
import path from 'path'
const router = express.Router();
const app = express();
import mongo from "../ruser.js/user.js.js";
import mongo from "../ruser.js/";


router.get("/user", (req, res) => {
    const data = mongo.find({});
    res.send(data);
});
router.post("/user", async (req, res) => {

    const {name, created_at} = req.body;
    const m = new mongo({name, created_at});
    m.save();
    res.end("ok");
});
router.get("/user:id", (req, res) => {
    const data = mongo.findById({id: req.params.id});
    res.send(data);
});
router.delete("/user:id", (req, res) => {
    const data = mongo.findByIdAndUpdate(req.params.id, {IsDeactive: true});
    res.send(data);
});
router.put("/user:id", (req, res) => {
    const data = mongo.findByIdAndUpdate({
        id: req.params.id
    }, req.body);
    res.send(data);
});
export default router;
