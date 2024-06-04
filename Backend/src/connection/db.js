const mongoose=require("mongoose");
require("dotenv").config();

const mongo_url=process.env.mongo_url;
const connection=mongoose.connect("mongodb+srv://Jega0018:Jega08m@cluster0.2afnqpo.mongodb.net/");

module.exports={
    connection,
}