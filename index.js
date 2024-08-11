const express = require("express");
require("./src/db/conn");
const app = express();
const taskSchema = require("./src/model/schema");
app.use(express.json());

const port = process.env.PORT || 4000;
// Post method
app.post("/addTask", async (req, res) => {
  try {
    const newTask = new taskSchema(req.body);
    console.log(req.body);
    const insertTask = await newTask.save();
    res.send(insertTask);
  } catch (error) {
    console.error(error);
  }
});

//Get method
app.get("/getTask", async (req, res) => {
  try {
    const showTask = await taskSchema.find({});
    res.send(showTask);
  } catch (e) {
    console.error(e);
  }
});

// For Getting single resident
app.get("/getTask/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const showTask = await taskSchema.findById({ _id: _id });
    res.send(showTask);
  } catch (e) {
    console.error(e);
  }
  const showTask = await new taskSchema.find({});
  res.send(showTask);
});

// For Delete

app.delete("/deleteTask/:id", async (req, res) => {
  try {
    const deleteTask = await taskSchema.findByIdAndDelete(req.params.id);
    res.send(deleteTask);
  } catch (e) {
    console.error(e);
  }
});

// For Update

app.patch("/updateTask/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateTask = await taskSchema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateTask);
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => {
  console.log(`live at ${port}`);
});
