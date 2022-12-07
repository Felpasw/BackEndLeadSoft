
import express from 'express';
import { Router } from 'express';
import cors from 'cors'

import * as Articles from "../controllers/Articles/RequestHandlerArticles";
import * as Authors from "../controllers/Authors/RequestHandlerAuthors";
import * as Categories from "../controllers/Categories/RequestHandlerCategories";
import * as Comments from "../controllers/Comments/RequestHandlerComments"


//Router Config
const router: Router = express.Router()
//Cors policy
router.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors())
    next();
})
//Articles sets
router.post("/newArticle", Articles.postArticles);
router.put("/editArticle/:_id", Articles.putArticles);
router.delete("/deleteArticle/:_id", Articles.delArticles);
router.get("/Articles", Articles.getArticles);
router.get("/Article/:_id", Articles.getArticle);
//Authors sets
router.post("/newAuthor", Authors.postAuthors);
router.put("/editAuthor/:_id", Authors.putAuthors);
router.delete("/deleteAuthor/:_id", Authors.delAuthors);
router.get("/Authors", Authors.getAuthors);
router.get("/Author/:_id", Authors.getAuthor);
//Categories sets
router.post("/newCategory", Categories.postCategories);
router.put("/editCategory/:_id", Categories.putCategories);
router.delete("/deleteCategory/:_id", Categories.delCategories);
router.get("/Categories", Categories.getCategories);
router.get("/Category/:_id", Categories.getCategorie);
//Comments sets
router.post("/newComment", Comments.postComments);
router.put("/editComment/:_id", Comments.putComments);
router.delete("/deleteComment/:_id", Comments.delComments);
router.get("/getComment/:_id", Comments.getComment);
router.get("/getComments", Comments.getComments);

export default router;


