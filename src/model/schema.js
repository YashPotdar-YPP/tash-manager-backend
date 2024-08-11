const express = require("express");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  priority:{
    type:String
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  deadline: {
    type: String,
  },
});

const TaskSchema = new mongoose.model("taskSchema", taskSchema);
module.exports = TaskSchema;
