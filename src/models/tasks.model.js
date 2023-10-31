import { Schema, model } from "mongoose";

const TasksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

export const Tasks = model('Tasks', TasksSchema);