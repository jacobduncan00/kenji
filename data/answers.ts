export type Song = {
  songName: string;
  fileName: string;
};

const Answers: Array<Song> = [
  { songName: "cigar", fileName: "/songs/cigar.mp3" },
  { songName: "arcade", fileName: "/songs/arcade.mp3" },
  { songName: "oh wow", fileName: "/songs/oh_wow.mp3" },
  { songName: "alone", fileName: "/songs/alone.mp3" },
  { songName: "shallow", fileName: "/songs/shallow.mp3" },
  { songName: "so what", fileName: "/songs/so_what.mp3" },
  { songName: "lie lie lie", fileName: "/songs/lie_lie_lie.mp3" },
  { songName: "step back", fileName: "/songs/step_back.mp3" },
  { songName: "mars", fileName: "/songs/mars.mp3" },
  { songName: "vanish", fileName: "/songs/vanish.mp3" },
  { songName: "autopilot", fileName: "/songs/autopilot.mp3" },
  { songName: "used2know", fileName: "/songs/used2know.mp3" },
];

let AnswersCopy: Array<Song> = [...Answers];

const QueuedSongs = new Map();
const PlayedSongs = new Map();

let lastPlayedSongName = "";

export function fillQueue(numSongs: number) {
  for (let i = 0; i < numSongs; i++) {
    const index = Math.floor(Math.random() * AnswersCopy.length);
    const songName = AnswersCopy[index].songName;
    const fileName = AnswersCopy[index].fileName;
    QueuedSongs.set(songName, fileName);
    AnswersCopy = AnswersCopy.filter((song) => song.songName !== songName);
  }
  return getLastItemInMap(QueuedSongs);
}

// This is done once the player guesses and moves onto new song
export function updateQueue() {
  const justPlayedSong = getLastItemInMap(QueuedSongs);
  if (justPlayedSong.songName != "" && justPlayedSong.fileName != "") {
    QueuedSongs.delete(justPlayedSong?.songName);

    if (justPlayedSong) {
      lastPlayedSongName = justPlayedSong.songName;
      PlayedSongs.set(justPlayedSong.songName, justPlayedSong.fileName);
    }

    // console.log("QUEUED SONGS:", QueuedSongs);
    // console.log("PLAYED SONGS:", PlayedSongs);

    return getLastItemInMap(QueuedSongs);
  }
}

export function getLastPlayedSong() {
  return lastPlayedSongName.toLowerCase();
}

export function getSongNamesPlayedInOrder() {
  return Array.from(PlayedSongs.keys());
}

export function clearQueue() {
  QueuedSongs.clear();
}

export function clearPlayed() {
  PlayedSongs.clear();
}

const getLastItemInMap = (map: any) => {
  let lastSong = [...map][map.size - 1];
  if (lastSong) {
    return {
      songName: lastSong[0],
      fileName: lastSong[1],
    };
  } else {
    return {
      songName: "",
      fileName: "",
    };
  }
};
