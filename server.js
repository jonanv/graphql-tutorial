import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';

import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 4000;
const app = express();
server.applyMiddleware({ app });

mongoose.connect('mongodb://localhost:27017/graphql-tutorial', { useNewUrlParser: true })
    .then(() => {
        console.log('Conectado a MongoDB.');
        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
        });
    })
    .catch((error) => {
        console.log('No se ha conectado a MondoDB', error);
    });