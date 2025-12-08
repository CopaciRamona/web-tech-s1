"use strict"

const express=require('express')
const sequelize=require('./sequelize');
require('./models/employee')

const app=express();

app.use(express.json());

app.use("/api",require("./routes/employess"));

app.listen(7000, async ()=>{
    console.log('Server started on http://localhost:7000');
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully");

        // Atenție: Asta va ȘTERGE toate datele existente în Employee!
        await sequelize.sync();
    }catch(error){
        console.error("Unable to connect to the database:",error);
    }
});