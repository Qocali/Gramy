import mongoose from 'mongoose';
const {Schema} = mongoose;
const bcrypt = require("bcrypt");
const SALT = 10;


const users = new Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
    role: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: Boolean
});

serSchema.pre("save", function (next) {
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(SALT, (err, salt) => {
        if (err) 
            return next(err);
        


        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) 
                return next(err);
            


            this.password = hash;
            next();
        });
    });
});
const user = mongoose.model('user', users);
export default user;
