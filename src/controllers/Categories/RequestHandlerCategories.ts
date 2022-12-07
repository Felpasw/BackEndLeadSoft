import { RequestHandler } from "express";
import Categories from "../../Database/Models/Categories";
import { Response } from "express";


//-----------------
export const postCategories: RequestHandler = async(req: {body: { Name: string, Type:string}}, res: Response ) => {
    if(req.body.Name && req.body.Type){
        const newCategorie = new Categories({
            Name: req.body.Name,
            Type: req.body.Type
        })
        newCategorie.save().then((data) => {
            
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
export const putCategories: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const CategorieToUpdate = await Categories.findByIdAndUpdate(req.params._id, req.body);
        res.json(CategorieToUpdate);
        res.status(200);
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
export const delCategories: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delCategorie = await Categories.findByIdAndRemove(req.params._id);
        res.status(200);
        res.json(delCategorie);
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
export const getCategories: RequestHandler = async(req, res: Response) => {
    const AllCategories = await Categories.find();
    res.json(AllCategories);
    res.status(200);
}
//-----------------
export const getCategorie: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const CategorieFound = await Categories.findById(req.params._id); 
        res.status(200)
        res.json(CategorieFound);
    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);
        }
}