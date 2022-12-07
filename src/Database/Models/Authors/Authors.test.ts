import{it, expect} from 'vitest';


import axios from 'axios';
import {AxiosResponse} from 'axios';




//--------------------
it("should be able to see an Author", async() =>{
    const getResponse = await axios.get("http://localhost:4000/Author/6390a77681093eaf35498fa8");
    expect(getResponse.data._id).toBe("6390a77681093eaf35498fa8");
})
//--------------------
it("should be able to create and delete an Author", async() =>{
    const Author =  {
        FirstName: "Felipe",
        LastName: "Lacerda",
        Age: 19,
        Email: "felipecavalcantelacerda@hotmail.com"
    } 
    const PostResponse: AxiosResponse = await axios.post("http://localhost:4000/newAuthor", Author);
    console.log(PostResponse.data._id);
    expect(PostResponse.status).toBe(200);
    const DelResponse: AxiosResponse = await axios.delete(`http://localhost:4000/deleteAuthor/${PostResponse.data._id}`);
    expect(DelResponse.status).toBe(200);
})
//--------------------
it("should be able to edit an Author", async() =>{
    const AuthorEdit =  {
        FirstName: "João",
        LastName: "Antônio",
        Age: 27,
        Email: "JoaoAntonio@hotmail.com"
    } 
    //6390a77681093eaf35498fa8 = _id de um objeto já em database
    const putResponse: AxiosResponse = await axios.put('http://localhost:4000/editAuthor/6390a77681093eaf35498fa8', AuthorEdit)
    expect(putResponse.status).toBe(200);
})


