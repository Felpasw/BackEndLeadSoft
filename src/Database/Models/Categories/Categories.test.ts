import{it, expect} from 'vitest';

import axios, { Axios } from 'axios';
import {AxiosResponse} from 'axios';
import categories from '../../../types/Categories';




//--------------------
it("should be able to create and delete a categorie", async() =>{
   const newCategory: categories = {
        Name: "Susto",
        Type: "Terror"
   }
   const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newCategory", newCategory);
   expect(PostResponse.status).toBe(200);
   const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteCategory/${PostResponse.data._id}`)
   expect(DelResponse.status).toBe(200);
})
//--------------------
it("should be able to edit a category", async() =>{
    const editCategory: categories = {
        Name: "Macaco",
        Type: "Animal"
   }
   const putResponse: AxiosResponse = await axios.put(`http://localhost:4000/editCategory/6390cdb86e8ed3c2ce9bc687`, editCategory);
   expect(putResponse.status).toBe(200);
})
//--------------------
it("should be able to see a category", async() =>{
    const getResponse: AxiosResponse = await axios.get("http://localhost:4000/Category/6390cdb86e8ed3c2ce9bc687")
    expect(getResponse.status).toBe(200);
})
