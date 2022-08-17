import express from "express";
import path from 'path'
import jwt from 'jsonwebtoken';
const router = express.Router();
const app = express();
app.post('/SignIn', (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'foobar'
    }, jwtSecretKey);

    res.send(token);
})
app.post('/LogIn', (req, res) => {
    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded.foo)
    // bar

    // verify a token symmetric
    jwt.verify(token, 'shhhhh', function (err, decoded) {
        console.log(decoded.foo) // bar
    });

    // invalid token - synchronous
    try {
        var decoded = jwt.verify(token, 'wrong-secret');
    } catch (err) { // err
    }

})
app.post('/forgotPassword', (req, res) => {
    const {MailtrapClient} = require("mailtrap");

    // For this example to work, you need to set up a sending domain,
    // and obtain a token that is authorized to send from the domain
    const TOKEN = "your-api-token";
    const SENDER_EMAIL = "sender@yourdomain.com";
    const RECIPIENT_EMAIL = "recipient@email.com";

    const client = new MailtrapClient({token: TOKEN});

    const sender = {
        name: "Mailtrap Test",
        email: SENDER_EMAIL
    };

    client.send({
        from: sender,
        to: [
            {
                email: RECIPIENT_EMAIL
            }
        ],
        subject: "Hello from Mailtrap!",
        text: "Welcome to Mailtrap Sending!"
    }).then(console.log, console.error);
})
