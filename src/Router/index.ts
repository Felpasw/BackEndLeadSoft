
import express from 'express';
import { Router } from 'express';
import cors from 'cors'

import * as Articles from "../Database/Models/Articles/RequestHandlerArticles";
import * as Authors from "../Database/Models/Authors/RequestHandlerAuthors";


//Router Config
const router: Router = express.Router()
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
router.get("Article/:_id", Articles.getArticle);
//Authors sets
router.post("/newAuthor", Authors.postAuthors);
router.put("/editAuthor/:_id", Authors.putAuthors);
router.delete("/deleteAuthor/:_id", Authors.delAuthors);
router.get("/Authors", Authors.getAuthors);
router.get("Author/:_id", Authors.getAuthor);
//Categories sets
//Comments setts

export default router;


