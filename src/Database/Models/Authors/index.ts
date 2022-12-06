import mongoose from 'mongoose';

const Authors = new mongoose.Schema({
    FirstName:{
        type: String
    },
    LastName: {
        type: String     
    },
    Age: {
        type: Number
    },
    email: {
        type: String 
    }

})

export default mongoose.model('Authors', Authors)