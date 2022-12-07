import mongoose from 'mongoose';

const Comments = new mongoose.Schema({
    ArticleID:{
        type: String
    },
    text: {
        type: String
    }
    
})