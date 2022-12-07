import { RequestHandler } from "express";
import Authors from "../../Database/Models/Authors";
import { Response } from "express";
import { ObjectId } from "mongoose";


//-----------------
export const postAuthors: RequestHandler = async(req: {body: { FirstName: string, LastName:string, Email: string, Age:number  }}, res: Response ) => {
    if(req.body.FirstName&& req.body.LastName && req.body.Email && req.body.Age){
        const newAuthor = new Authors({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Age: req.body.Age
        })
        newAuthor.save().then((data) => {
            
        })
        res.json(newAuthor);
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
export const putAuthors: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const ArticleToUpdate = await Authors.findByIdAndUpdate(req.params._id, req.body);
        res.status(200);
        res.json(ArticleToUpdate);
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
export const delAuthors: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delAuthor = await Authors.findByIdAndRemove(req.params._id);
        res.status(200);
        res.json(delAuthor);
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
export const getAuthors: RequestHandler = async(req, res: Response) => {
    const AllAuthors = await Authors.find();
    res.json(AllAuthors);
    res.status(200);
}
//-----------------
export const getAuthor: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const AuthorFound = await Authors.findById(req.params._id); 
        res.json(AuthorFound);

    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);  
    }
}
