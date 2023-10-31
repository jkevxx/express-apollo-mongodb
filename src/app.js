import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

import { PORT } from './config.js';
import { connectDB } from './db.js';
import { resolvers } from './resolvers.js';
import { typeDefs } from './typeDefs.js';

export const app = express();
connectDB();

async function main() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/graphql', expressMiddleware(apolloServer));

  app.use('*', (req, res) => res.status(404).json({ message: 'Not Found' }));

  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });
}

main();
