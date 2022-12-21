import { BsPlayFill, BsSoundwave } from "react-icons/bs";

type Props = {
  playing: boolean;
  setPlaying: (isPlaying: boolean) => void;
};

export default function PlayButton({ playing, setPlaying }: Props) {
  return (
    <button
      disabled={playing ? true : false}
      onClick={() => setPlaying(!playing)}
      className="rounded-full bg-gray-500 p-2 text-white absolute bottom-1/2 left-1/2 disabled:cursor-not-allowed"
    >
      {playing ? <BsSoundwave /> : <BsPlayFill />}
    </button>
  );
}
