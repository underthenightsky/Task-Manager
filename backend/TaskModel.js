const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Medium", "Low","High"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },  
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  // taskId: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },

});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;