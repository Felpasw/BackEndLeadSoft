import mongoose from 'mongoose';

const Articles = new mongoose.Schema({
    authorID:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Author"
    },
    title:{
        type: String
    },
    description: {
        type: String
    },
    text: {
        type: String
    },
    categoryID:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Categories"
    }

})
export default mongoose.model('Articles', Articles)