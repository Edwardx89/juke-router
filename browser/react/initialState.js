const initialState = {
  albums: [],
  selectedAlbum: {},
  artists: [],
  selectedArtist: {},
  currentSong: {},
  currentSongList: [],
  isPlaying: false,
  progress: 0,
};

export default initialState;

// this file is set aside for the initial state of the whole page? 
// here we need to add spaces for artists:
// // add two fields like the following to initialState.js
// {
//   artists: [],
//   selectedArtist: {}
// }