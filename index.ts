import { ApolloServer, gql } from 'apollo-server-fastify';
import fastify from 'fastify';
import { DocumentNode } from 'graphql';
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"

async function startApolloServer(typeDefs: DocumentNode, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = fastify();
  app.register(server.createHandler());
  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)