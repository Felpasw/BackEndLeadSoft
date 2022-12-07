import mongoose from 'mongoose';


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://felipasso:felipasso@cluster0.fovabzu.mongodb.net/LeadSoft?retryWrites=true&w=majority").then(() => console.log("Conected to mongoDB!"));
