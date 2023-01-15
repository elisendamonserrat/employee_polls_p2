import React from 'react'

const PollResults = () => {
  return (
    <div className="content-container flex flex-col items-center space-y-4">
      <h1>Poll by @user</h1>
      <img
        src="https://www.shareicon.net/data/128x128/2016/09/15/829442_man_512x512.png"
        alt={"user name"}
      />
      <p>Poll already answered. See below the stats!</p>
      <p className="subtitle font-semibold">Would You Rather...?</p>
      <div className="flex w-11/12 justify-between">
        <div className="w-48 bg-transparent text-blue-700 font-semibold border border-blue-500 rounded text-center">
          <div className="py-2 px-4">Text Question 1</div>
          <div className="bg-blue-100 py-2 px-4 ">Selected Option Yes </div>
          <div className="bg-blue-400 py-2 px-4 text-white">Votes 10 (90%)</div>
        </div>
        <div className="w-48 bg-transparent text-blue-700 font-semibold border border-blue-500 rounded text-center">
          <div className=" py-2 px-4 ">Text Question 2</div>
          <div className="bg-blue-100 py-2 px-4 ">Selected Option No </div>
          <div className="bg-blue-400 py-2 px-4 text-white">Votes 1 (10%)</div>
        </div>
      </div>
    </div>
  );
}

export default PollResults