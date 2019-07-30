import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 4000;
const app = express();
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});