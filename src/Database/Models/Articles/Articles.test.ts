import{it, expect} from 'vitest';
import Articles from '.';

import axios from 'axios';
import {AxiosResponse} from 'axios'



it("should be able to create and delete an article", async() =>{
    const Article =  {
        authorID: "authorID!",
        title: "New Title!",
        description: "Here's some description!",
        text: "We got some text here!"
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newArticle", Article);
    expect(PostResponse.status).toBe(200);
    const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteArticle/${PostResponse.data._id}`);
    expect(DelResponse.status).toBe(200)
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
        authorID: "authorID!",
        title: "New Title!",
        description: "Here's some description!",
        text: "We got some text here!",
        categorieID: "categorieID!"
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newArticle", Article);
    expect(PostResponse.status).toBe(200);
    const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteArticle/${PostResponse.data._id}`);
    expect(DelResponse.status).toBe(200)
})
//-----------------------
// it("should be able to update an Article", async() =>{
//     const Article =  {
//         authorID: "authorID!",
//         title: "New Title!",
//         description: "Here's some description!",
//         text: "We got some text here!",
//         categorieID: "categorieID!"
//     } 
//     const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newArticle", Article);
//     expect(PostResponse.status).toBe(200);
//     const ArticleUpdated =  {
//         authorID: "authorID2!",
//         title: "New Title!2",
//         description: "Here's some description!2",
//         text: "We got some text here!2",
//         categorieID: "categorieID!2"
//     } 
//     const putResponse: AxiosResponse = await axios.put(`http://localhost:4000/editArticle/${PostResponse.data._id}`, ArticleUpdated);
//     expect(putResponse.status).toBe(200);
//     // axios.delete(`http://localhost:4000/editArticle/${PostResponse.data._id}`)
// })