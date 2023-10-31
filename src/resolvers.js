import { Tasks } from './models/tasks.model.js';

export const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    getAllTasks: async () => {
      const tasks = await Tasks.find();
      return tasks;
    },
  },

  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args;
      const newTask = new Tasks({ title, description });
      await newTask.save();
      return newTask;
    },
  },
};
