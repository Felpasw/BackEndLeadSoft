import{it, expect} from 'vitest';

import axios from 'axios';
import {AxiosResponse} from 'axios';
import { Types } from 'mongoose';
const ObjectId = Types.ObjectId


it("should be able to create and delete a comment", async() =>{
    const newComment = {
        ArticleID: new ObjectId("6390c24fcd1a9ec31367f2b7"),
        Text: "Terror"
   }
   const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newComment", newComment);
   expect(PostResponse.status).toBe(200);
   const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteCategory/${PostResponse.data._id}`)
   expect(DelResponse.status).toBe(200);
})

it("should be able to edit a comment", async()=>{
    const editComment ={
        ArticleID: new ObjectId("6390c24fcd1a9ec31367f2b7"),
        text: "sample comment"
    }
    const putResponse: AxiosResponse = await axios.put(`http://localhost:4000/editComment/6390d6f8e1a72b4bdf75180b`, editComment);
    expect(putResponse.status).toBe(200);
})