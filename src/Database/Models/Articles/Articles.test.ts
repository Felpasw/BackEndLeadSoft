import{it, expect, beforeAll, beforeEach} from 'vitest';

import axios from 'axios';
import {AxiosResponse} from 'axios'

import Article from "../../../types/Articles";
import {Types} from 'mongoose';
const ObjectId = Types.ObjectId




it("should be able to see an article", async() =>{
   //6390a3542a9908c68459236c = Article already in database
    const article: AxiosResponse = await axios.get(`http://localhost:4000/Article/6390c24fcd1a9ec31367f2b7`);
    expect(article.data._id).toEqual("6390c24fcd1a9ec31367f2b7");

})


//--------------------
it("should be able to create and delete an article", async() =>{
    const Article =  {
        authorID: new ObjectId("6390b01cfe9a619589cba1aa"),
        title: "New Title!",
        description: "Here's some description!",
        text: "We got some text here!"
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newArticle", Article);
    expect(PostResponse.status).toBe(200);
    const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteArticle/${PostResponse.data._id}`);
    expect(DelResponse.status).toBe(200);
})
//-----------------------
it("shouldn't be able to create an article without the author", async()=>{
    const Article =  {
        title: "New Title!",
        description: "Here's some description!",
        text: "We got some text here!"
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newArticle", Article)
    expect(PostResponse.data.message).toBe("Article Without Author!");
})
//-----------------------
it("should be able to connect a Categorie to an Article", async() =>{
    const Article =  {
        authorID: new ObjectId("6390b01cfe9a619589cba1aa"),
        title: "New Title!",
        description: "Here's some description!",
        text: "Here's some text!",
        categorieID: new ObjectId("6390cdb86e8ed3c2ce9bc687")
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newArticle", Article);
    expect(PostResponse.status).toBe(200);
    const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteArticle/${PostResponse.data._id}`);
    expect(DelResponse.status).toBe(200);
})
//-----------------------
it("should be able to update an Article", async() =>{
    const ArticleUpdated =  {
        authorID: new ObjectId("6390b01cfe9a619589cba1aa"),
        title: "New Title!2",
        description: "Here's some description!2",
        text: "We got some text here!2",
        categorieID: new ObjectId("6390cdb86e8ed3c2ce9bc687")
    }
    const putResponse = await axios.put("http://localhost:4000/editArticle/6390c24fcd1a9ec31367f2b7", ArticleUpdated);
    expect(putResponse.status).toBe(200);
})
//     const putResponse: AxiosResponse = await axios.put(`http://localhost:4000/editArticle/${PostResponse.data._id}`, ArticleUpdated);
//     expect(putResponse.status).toBe(200);
//     // axios.delete(`http://localhost:4000/editArticle/${PostResponse.data._id}`)
// })