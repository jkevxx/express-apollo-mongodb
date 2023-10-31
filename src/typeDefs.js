
export const typeDefs = `#graphql

  type Task {
    id: ID
    title: String
    description: String
  }
  
  type Query {
    hello: String
    getAllTasks:[Task]
  }

  type Mutation {
    createTask(title: String, description: String): Task
  }
`;
