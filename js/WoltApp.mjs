import productroute from '../Routes/product.js'
import categoryroute from '../Routes/category.js'
import objectcategory from '../Routes/objectcategory.js'
import objectRoutes from '../Routes/object.js';
import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';

config();

var url = process.env.Data_Connection;
mongoose.connect(url);

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(categoryroute)
app.use(productroute);
app.use(objectcategory);
app.use(objectRoutes);
app.use("/wolt", (req, res, next) => {
    token = req.cookies.token
    if (token) {
        next()
    } else {
        res.redirect("/Login")
    }
})
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
