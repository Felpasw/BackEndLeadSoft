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
        const CategoryToUpdate = await Categories.findByIdAndUpdate(req.params._id, req.body);
        res.json(CategoryToUpdate);
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
        const delCategory = await Categories.findByIdAndRemove(req.params._id);
        res.status(200);
        res.json(delCategory);
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
export const getCategory: RequestHandler = async(req, res: Response) => {
    if(req.params._id){
        const CategoryFound = await Categories.findById(req.params._id); 
        res.status(200)
        res.json(CategoryFound);
    }
    else{
        const error = {
            message: "Error!"
        }
        res.status(404);
        res.json(error);
        }
}