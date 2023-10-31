import { Tasks } from './models/tasks.model.js';

export const resolvers = {
  Query: {
    hello() {
      return 'Hello World!';
    },
    async getAllTasks() {
      const tasks = await Tasks.find();
      return tasks;
    },
    async getTask(_, { id }) {
      const task = await Tasks.findById(id);
      return task;
    },
  },

  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args.task;
      const newTask = new Tasks({ title, description });
      await newTask.save();
      return newTask;
    },
    deleteTask: async (_, args) => {
      const { id } = args;
      await Tasks.findByIdAndDelete(id);
      return 'Task deleted successfully';
    },
    updateTask: async (_, args) => {
      const { id, task } = args;
      const taskUpdated = await Tasks.findByIdAndUpdate(
        id,
        { $set: task },
        { new: true }
      );
      return taskUpdated;
    },
  },
};
