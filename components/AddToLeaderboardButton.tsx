const AddToLeaderboardButton = () => {
  return (
    <div className="mt-4">
      <button className="relative font-header inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add To Leaderboard
        </span>
      </button>
    </div>
  );
};

export default AddToLeaderboardButton;
