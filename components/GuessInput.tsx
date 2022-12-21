import { useState } from "react";

type Props = {
  guessCallback: (guess: string) => void;
};

export default function GuessInput({ guessCallback }: Props) {
  const [guess, setGuess] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    guessCallback(guess);
  };

  return (
    <form
      className="absolute bottom-1/2 left-[45%] cursor-pointer"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="default_outlined"
        className="cursor-pointer block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />
      <label
        htmlFor="default_outlined"
        className="cursor-pointer absolute text-sm text-white dark:text-white duration-300 transform -translate-y-8 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-8 left-1"
      >
        Guess song
      </label>
    </form>
  );
}
