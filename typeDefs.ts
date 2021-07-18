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

  type TrackDetail {
    id: String!,
    album: Album,
    artists: [Artist!]!,
    name: String!,
    preview_url: String,
    type: TrackType,
    duration_ms: Int!
  }

  type Track {
    added_at: String!,
    track: TrackDetail
  }

  type Owner {
    display_name: String!
  }

  type Playlist {
    name: String!,
    description: String!,
    owner: Owner,
    tracks: [Track!]!
  }

  type Query {
    playlists: [Playlist!]!
  }
`

export default typeDefs