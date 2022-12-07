import mongoose from 'mongoose';

const Comments = new mongoose.Schema({
    ArticleID:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Articles",
        required: true,
    },
    text: {
        type: String
    }
})

export default mongoose.model("Comments", Comments);