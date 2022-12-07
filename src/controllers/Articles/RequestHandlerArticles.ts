import { RequestHandler, Response } from "express";
import { Types }from "mongoose";
import Articles from "../../Database/Models/Articles";
import Article from "../../types/Articles";
const ObjectId = Types.ObjectId







//------------------------------------------------
export const postArticles: RequestHandler = async(req: {body: {authorID: Types.ObjectId, title:string, description: string, text:string, categoryID:Types.ObjectId }}, res: Response ) => {
    if(req.body.authorID) {
        if(req.body.title && req.body.description && req.body.text){
            if(req.body.categoryID){
                const newArticle = new Articles({
                    authorID: new ObjectId(`${req.body.authorID}`),
                    categorieID: new ObjectId(req.body.categoryID),
                    title: req.body.title,
                    description: req.body.description,
                    text: req.body.text,
                });
                newArticle.save().then((data) =>{
                    console.log(data);
                })
                res.status(200);
                return res.json(newArticle);
            }
            const newArticle = new Articles({
                authorID: req.body.authorID,
                title: req.body.title,
                description: req.body.description,
                text: req.body.text,
            });
            newArticle.save().then((data) =>{
                console.log(data);
            })
            res.status(200);
            return res.json(newArticle);
        }
        else{
            const error ={
                message: "Some inputs are empty!"
            }
            res.json(error);
            res.status(404);
            
        }    
    }
    else{
        const error ={
            message: "Article Without Author!"
        }
        res.json(error);
        res.status(404);
        

    }
}
//------------------------------------------------
export const putArticles: RequestHandler = async(req , res: Response ) => {
        const ArticleToUpdate = await Articles.findByIdAndUpdate(req.params._id, req.body);
        res.json(ArticleToUpdate);
        res.status(200);
    }
//------------------------------------------------
export const delArticles: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delArticle = await Articles.findByIdAndRemove(req.params._id);
        res.status(200);
        res.json(delArticle);
    }
    else{
        throw new Error("Can't delete Article without ID!");        
    }
}
//------------------------------------------------
export const getArticles: RequestHandler = async(req, res: Response) => {
    const AllArticles = await Articles.find();
    res.status(200);
    res.json(AllArticles);
}
//------------------------------------------------
export const getArticle: RequestHandler = async(req, res: Response) => {
    const ArticleFound = await Articles.findById(req.params._id);
    res.status(200);
    res.json(ArticleFound);
}
