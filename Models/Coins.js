import mongoose from 'mongoose';
const { Schema } = mongoose;
var url ="mongodb+srv://Qocali:Psg+1970@cluster0.g9nsa8a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);

const Coins = new Schema( { name: String,symbol: String });
const Blog = mongoose.model('Blog',Coins);
  export default Blog;