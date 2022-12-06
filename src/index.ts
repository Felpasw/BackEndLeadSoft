
require("./database/Connect");
import  Express  from "express";
import router from "./Router";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(router)


app.listen(4000, () =>  console.log("Sever is running on port 4000!"));

module.exports = app;

