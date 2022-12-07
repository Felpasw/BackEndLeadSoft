import mongoose from 'mongoose';

const Categories = new mongoose.Schema({
    Name:{
        type: String
    },
    Type:{
        type:String
    }
})
export default mongoose.model('Categories', Categories);