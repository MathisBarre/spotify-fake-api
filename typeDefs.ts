import { gql } from 'apollo-server-fastify';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  type Playlist {
    name: String!,
    description: String!,
  }

  type Query {
    playlists: [Playlist!]!
  }
`

export default typeDefs