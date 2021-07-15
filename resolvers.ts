import playlists from "./fakePlaylistResponse"

const resolvers = {
  Query: {
    playlists: () => playlists
  }
}

export default resolvers