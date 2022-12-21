import { useEffect, useState } from "react";
import GuessInput from "../components/GuessInput";
import Layout from "../components/Layout";
import PlayButton from "../components/PlayButton";
import ResultCard from "../components/ResultCard";
import {
  fillQueue,
  Song,
  updateQueue,
  getLastPlayedSong,
  getSongNamesPlayedInOrder,
} from "../data/answers";

const Game = () => {
  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement>();
  const [playing, setPlaying] = useState<boolean>(false);
  const [songOver, setSongOver] = useState<boolean>(false);
  const [song, setSong] = useState<Song>();
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOverAfterNextGuess, setGameOverAfterNextGuess] =
    useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    setSong(fillQueue(5));
  }, []);

  useEffect(() => {
    if (song != undefined) {
      setAudioPlayer(new Audio(song.fileName));
    }
  }, [song]);

  useEffect(() => {
    if (playing) {
      setSongOver(false);
      audioPlayer?.play();
      setTimeout(() => {
        audioPlayer?.pause();
        setPlaying(false);
        setSongOver(true);
        let songObj = updateQueue();
        if (songObj?.fileName === "" && songObj?.songName === "") {
          setGameOverAfterNextGuess(true);
        } else {
          setSong(songObj);
        }
      }, 5000);
    }
  }, [playing]);

  const handleGuess = (guess: string) => {
    // console.log("GUESS: ", guess);
    setGuesses([...guesses, guess]);
    if (guess.toLowerCase() === getLastPlayedSong()) {
      setScore(score + 1);
    }
    if (gameOverAfterNextGuess === true) {
      setGameOver(true);
    }
    setSongOver(false);
  };

  return (
    <Layout title="Kenji">
      {!gameOver ? (
        <>
          {!songOver ? (
            <PlayButton playing={playing} setPlaying={setPlaying} />
          ) : (
            <GuessInput guessCallback={handleGuess} />
          )}
        </>
      ) : (
        <ResultCard
          score={score}
          totalSongs={guesses.length}
          songsPlayed={getSongNamesPlayedInOrder()}
          songsGuessed={guesses}
        />
      )}
    </Layout>
  );
};

export default Game;
