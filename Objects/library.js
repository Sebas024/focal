const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////





// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  let keys = Object.keys(library.playlists);
  for (let key of keys) {
    console.log(`${library.playlists[key].id}: ${library.playlists[key].name} - ${library.playlists[key].tracks.length} tracks`);
  }
};
printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let keys = Object.keys(library.tracks);
  for (let key of keys) {
    console.log(`${library.tracks[key].id}: ${library.tracks[key].name} by ${library.tracks[key].artist} (${library.tracks[key].album})`);
  }
};
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let keys = Object.keys(library.playlists);
  for (let key of keys) {
    if (playlistId === key) {
      console.log(`${library.playlists[key].id}: ${library.playlists[key].name} - ${library.playlists[key].tracks.length} tracks`);
      let trackKeys =  Object.values(library.playlists[key].tracks);
      for (let trackKey of trackKeys) {
        console.log(`${library.tracks[trackKey].id}: ${library.tracks[trackKey].name} by ${library.tracks[trackKey].artist} (${library.tracks[trackKey].album})`);
      }

    }
  }
};
printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       
  library.playlists[playlistId].tracks.push(trackId);
  printPlaylists();

};
addTrackToPlaylist('t02', 'p02');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const track = generateUid();
  library.tracks[track] = {
    id: track,
    name: name,
    artist: artist,
    album: album
  };
  printTracks();
};
addTrack("Memories", "A1", "XYZ");

// adds a playlist to the library
const addPlaylist = function(name) {
  const playlist = generateUid();
  library.playlists[playlist] = {
    id: playlist,
    name: name,
    tracks: []
  };
  printPlaylists();

};
addPlaylist("A1");