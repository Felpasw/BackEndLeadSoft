import{it, expect} from 'vitest';
import Authors from '.';

import axios from 'axios';
import {AxiosResponse} from 'axios';





it("should be able to create and delete an article", async() =>{
    const Author =  {
        FirstName: "Felipe",
        LastName: "Lacerda",
        Age: 19,
        Email: "felipecavalcantelacerda@hotmail.com"
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newAuthor", Author);
    expect(PostResponse.status).toBe(200);
    const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteAuthor/${PostResponse.data._id}`);
    expect(DelResponse.status).toBe(200);
})