import { RequestHandler } from "express";
import Comments from "../../Database/Models/Comments";
import { Response } from "express";
import { Types } from "mongoose";
const ObjectId = Types.ObjectId


//-----------------
export const postComments: RequestHandler = async(req: {body: {ArticleID: Types.ObjectId, Text: string}}, res: Response ) => {
    if(req.body.ArticleID && req.body.Text){
        const newComment = new Comments({
            ArticleID: new ObjectId(req.body.ArticleID),
            text: req.body.Text
        })
        newComment.save().then((data) => {
        })
        res.json(newComment);
        res.status(200);
    }
    else{
        const error ={
            message: "Some inputs are empty!"
        }
        res.status(404);
        res.json(error);
    }
}
//-----------------
export const putComments: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const CommentToUpdate = await Comments.findByIdAndUpdate(req.params._id, req.body);
        res.status(200);
        res.json(CommentToUpdate);
    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);
    }
   
}
//-----------------
export const delComments: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const delComment = await Comments.findByIdAndRemove(req.params._id);
        res.status(200);
        res.json(delComment);
    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);
    }
}
//-----------------
export const getComment: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const CommentFound = await Comments.findById(req.params._id); 
        res.status(200)
        res.json(CommentFound);
    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);
        }
}
//-----------------
export const getComments: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const CommentsFound = await Comments.find({ArticleID: req.params._id}); 
        res.status(200);
        res.json(CommentsFound);
    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);
        }
}