import mongoose from 'mongoose';

const Articles = new mongoose.Schema({
    authorID:{
        type: String
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
    categorieID:{
        type: String
    }

})
export default mongoose.model('Articles', Articles)