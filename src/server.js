import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/types';
import Query from './graphql/resolvers/Query';
import constants from './lib/otherConstants';

const app = express();

app.get('/status', (req, res) => {
  res.send({ message: 'It\'s Up' });
});

const {
  DEFAULT_QUERY,
  PLAYGROUND_URL,
  URL,
} = constants;

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'dark',
      'editor.fontSize': 12,
      'prettier.printWidth': 80,
    },
    tabs: [
      {
        endpoint: URL,
        query: DEFAULT_QUERY,
      },
    ],
  },
});

server.applyMiddleware({
  app,
  path: PLAYGROUND_URL,
});

export default app;
