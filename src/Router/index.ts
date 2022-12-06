
import express from 'express';
import { Router } from 'express';
import cors from 'cors'

import * as Articles from "../Database/Models/Articles/RequestHandlerArticles";


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
//Categories sets
//Comments setts

export default router;


