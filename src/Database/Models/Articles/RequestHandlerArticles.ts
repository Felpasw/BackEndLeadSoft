import { RequestHandler, Response } from "express";
import Articles from ".";


//------------------------------------------------
export const postArticles: RequestHandler = async(req: {body: {authorID: string, title:string, description: string, text:string, categorieID:string }}, res: Response ) => {
    if(req.body.authorID) {
        if(req.body.title && req.body.description && req.body.text){
            if(req.body.categorieID){
                const newArticle = new Articles({
                    authorID: req.body.authorID,
                    categorieID: req.body.categorieID,
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
                text: req.body.text
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
        console.log(ArticleToUpdate);
        res.status(200);
    }
//------------------------------------------------
export const delArticles: RequestHandler = async(req, res: Response ) => {
    if(req.params._id){
        const delArticle = await Articles.findByIdAndDelete(req.params._id);
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
export const getArticle: RequestHandler = async(req: {body: {_id:string}}, res: Response ) => {
    const ArticleFound = Articles.findById(req.body._id);
    res.status(200)
    res.json(ArticleFound)
}
