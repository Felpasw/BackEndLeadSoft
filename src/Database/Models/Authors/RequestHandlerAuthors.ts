import { RequestHandler } from "express";
import Authors from ".";
import { Response } from "express";


//-----------------
export const postAuthors: RequestHandler = async(req: {body: { FirstName: string, LastName:string, Email: string, Age:number  }}, res: Response ) => {
    if(req.body.FirstName&& req.body.LastName && req.body.Email && req.body.Age){
        const newAuthor = new Authors({
            firstName: req.body.FirstName,
            lastName: req.body.LastName,
            email: req.body.Email,
            age: req.body.Age
        })
        newAuthor.save().then((data) => {
            console.log(data);
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
    const ArticleToUpdate = await Authors.findByIdAndUpdate(req.params._id, req.body);
    console.log(ArticleToUpdate);
    res.status(200);
}
//-----------------
export const delAuthors: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delAuthor = await Authors.findByIdAndDelete(req.params._id);
        res.status(200);
        res.json(delAuthor);
    }
    else{
        throw new Error("Can't delete Author without ID!");        
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
    }
    else{
        throw new Error("Can't get Author without ID!");   
    }
}