import express from "express";
import path from 'path'
const router = express.Router();
const app = express();
import mongo from "../rcategory.js/category.js.js";
import mongo from "../rcategory.js/";
import multer from "multer";
const filefilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('Public', 'object'));
    },
    filename: function (req, file, cb) {
        const filenamepart = file.originalname.split(".");
        const ext = filenamepart[filenamepart.length - 1];
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "." + ext);
    }
});

const upload = multer({storage: storage});


router.get("/category", (req, res) => {
    const data = mongo.find({});
    res.send(data);
});
router.post("/category", upload.single("objectimage"), async (req, res) => {
    const {path} = req.file;
    const {name, image, created_at} = req.body;
    const m = new mongo({image: path, name, image, created_at});
    m.save();
    res.end("ok");
});
router.get("/category:id", (req, res) => {
    const data = mongo.findById({id: req.params.id});
    res.send(data);
});
router.delete("/category:id", (req, res) => {
    const data = mongo.findByIdAndUpdate(req.params.id, {IsDeactive: true});
    res.send(data);
});
router.put("/category:id", (req, res) => {
    const data = mongo.findByIdAndUpdate({
        id: req.params.id
    }, req.body);
    res.send(data);
});
export default router;
