import AddToLeaderboardButton from "./AddToLeaderboardButton";
import Centered from "./Centered";
import ReplayButton from "./ReplayButton";

interface IProps {
  score: number;
  totalSongs: number;
  songsPlayed: Array<string>;
  songsGuessed: Array<string>;
}

const ResultCard = ({
  score,
  totalSongs,
  songsPlayed,
  songsGuessed,
}: IProps) => {
  return (
    <Centered>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-lg">
          <h5 className="text-gray-900 text-xl text-center leading-tight font-header mb-4">
            Results
          </h5>
          <p className="text-gray-900 text-base mb-4">
            You guessed {score} out of {totalSongs} songs correct!
          </p>
          {songsPlayed.map((songPlayed: string, index: number) => {
            return (
              <div key={index}>
                Song <span className="font-bold">#{index + 1}</span> was{" "}
                <span className="font-bold">{songPlayed}</span> and you guessed{" "}
                <span className="font-bold">{songsGuessed[index]}</span>
              </div>
            );
          })}
          <div className="flex justify-center items-center gap-3">
            <ReplayButton />
            {/* <AddToLeaderboardButton /> */}
          </div>
        </div>
      </div>
    </Centered>
  );
};

export default ResultCard;
