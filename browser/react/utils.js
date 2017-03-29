export const convertSong = (song) => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  console.log('song',song);
  return song;
};

export const convertAlbum = (album) => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

export const convertArtist = (artist) => {
  // artist.songs = artist.map(convertSong);
  console.log('artist', artist)
  // return artist;
// axios.get('/api/songs/${songs.id}')
  // console.log('artist',artist)
};

export const convertAlbums = (albums) =>
  albums.map(album => convertAlbum(album));

const mod = (num, m) => ((num % m) + m) % m;

export const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};
