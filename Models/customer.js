import mongoose from 'mongoose';
const {Schema} = mongoose;


const grocerys = new Schema({
    name: String,
    surname: String,
    adress: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: Boolean
});
const grocery = mongoose.model('category', categorys);
export default grocery;
