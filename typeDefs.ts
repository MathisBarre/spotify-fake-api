import { gql } from 'apollo-server-fastify';
import { DocumentNode } from 'graphql';

const typeDefs: DocumentNode = gql`
  type Album {
    name: String!
  }

  type Artist {
    name: String!
  }

  enum TrackType {
    track # this is the only type in sample data for now
  }

  type Tracks {
    added_at: String!,
    track: {
      album: Album
      artists: [Artist!]!,
      name: String!,
      preview_url: String!,
      type: TrackType
    }
  }

  type Owner {
    display_name: String!
  }

  type Playlist: {
    name: String!,
    description: String!,
    owner: Owner,
    tracks: [Tracks!]!
  }

  type Query {
    playlists: [Playlist!]!
  }
`

export default typeDefs