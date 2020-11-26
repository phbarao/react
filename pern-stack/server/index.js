const express = require("express");
const server = express();
const cors = require("cors");
const db = require("./db");

//middleware
server.use(cors());
server.use(express.json()); //req.body

//ROUTES//

//create a todo
server.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await db.query(
      "INSERT INTO todo (title) VALUES($1) RETURNING *",
      [title]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos
server.get("/todos", async (req, res) => {
  try {
    const allTodos = await db.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
server.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo
server.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updateTodo = await db.query(
      "UPDATE todo SET title = $1 WHERE todo_id = $2",
      [title, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

server.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

server.listen(5000, () => {
  console.log("server has started on port 5000");
});
