import { RequestHandler } from "express";
import Categories from ".";
import { Response } from "express";


//-----------------
export const postAuthors: RequestHandler = async(req: {body: { FirstName: string, LastName:string, Email: string, Age:number  }}, res: Response ) => {
    if(req.body.FirstName&& req.body.LastName && req.body.Email && req.body.Age){
        const newCategorie = new Categories({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Age: req.body.Age
        })
        newCategorie.save().then((data) => {
            console.log(data);
        })
        res.json(newCategorie);
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
    const ArticleToUpdate = await Categories.findByIdAndUpdate(req.params._id, req.body);
    console.log(ArticleToUpdate);
    res.status(200);
}
//-----------------
export const delAuthors: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delAuthor = await Categories.findByIdAndDelete(req.params._id);
        res.status(200);
        res.json(delAuthor);
    }
    else{
        throw new Error("Can't delete Author without ID!");        
    }
}
//-----------------
export const getAuthors: RequestHandler = async(req, res: Response) => {
    const AllAuthors = await Categories.find();
    res.json(AllAuthors);
    res.status(200);
}
//-----------------
export const getAuthor: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const AuthorFound = await Categories.findById(req.params._id); 
    }
    else{
        throw new Error("Can't get Author without ID!");   
    }
}
