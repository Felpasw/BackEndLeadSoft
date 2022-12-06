import { RequestHandler } from "express";
import Authors from ".";
import { Response } from "express";



export const postAuthors: RequestHandler = async(req: {body: { firstName: string, lastName:string, email: string, age:number  }}, res: Response ) => {
    if(req.body.firstName&& req.body.lastName && req.body.email && req.body.age){
        const newAuthor = new Authors({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age
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
export const putAuthors: RequestHandler = async(req: {body: {title:string, description: string, text:string }}, res: Response ) => {

}
export const delAuthors: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delAuthor = await Authors.findByIdAndDelete(req.params._id);
        res.status(200);
        res.json(delAuthor);
    }
    else{
        throw new Error("Can't delete Article without ID!");        
    }
}
export const getAuthors: RequestHandler = async(req, res: Response ) => {
    

}
export const getAuthor: RequestHandler = async(req: {body: {title:string, description: string, text:string }}, res: Response ) => {

}
