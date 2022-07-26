import router from '../Routes/Coin.js'
import express from 'express';
const app=express()
app.use(express.urlencoded())
app.use(express.json())
app.use(router);
app.listen(1000);