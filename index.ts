import { ApolloServer } from 'apollo-server-fastify';
import fastify from 'fastify';
import { DocumentNode } from 'graphql';
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"

async function startApolloServer(typeDefs: DocumentNode, resolvers: any) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = fastify();
  app.register(server.createHandler());
  const port = process.env.PORT || 4000
  app.get("/", async () => {
    return { message: `Application is running on port ${port}`}
  })
  await app.listen(port, '0.0.0.0')
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)