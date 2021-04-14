const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());

//Routes//

//create a todo
app.post("/todos", async(req,res) => {
    try {
       const { description } = req.body;
       const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNINg *", 
       [description]
       );

       res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000")
});
