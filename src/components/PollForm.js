import React from "react";

const PollForm = () => {
  return (
    <div className="content-container flex flex-col items-center space-y-4">
      <h1>Poll by @user</h1>
      <img
        src="https://www.shareicon.net/data/128x128/2016/09/15/829442_man_512x512.png"
        alt={"user name"}
      />
      <p className="subtitle font-semibold">Would You Rather...?</p>
      <div className="flex w-11/12 justify-between">
        <div className="w-48 bg-transparent text-blue-700 font-semibold  rounded text-center">
          <div className="py-2 px-4 border border-blue-500 rounded-t">
            Text Question 1
          </div>
          <button className="w-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 b-t-none hover:border-transparent rounded-b">
            Select
          </button>
        </div>
        <div className="w-48 bg-transparent text-blue-700 font-semibold  rounded text-center">
          <div className="py-2 px-4 border border-blue-500 rounded-t">
            Text Question 2
          </div>
          <button className="w-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 b-t-none hover:border-transparent rounded-b">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollForm;
