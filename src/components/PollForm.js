import React from "react";

const PollForm = ({ question, author }) => {
  const { optionOne, optionTwo } = question;
  const { avatarURL, name } = author;
  return (
    <div className="content-container flex flex-col items-center space-y-4">
      <h1>Poll by {name}</h1>
      <img src={avatarURL} alt={name} />
      <p className="subtitle font-semibold">Would You Rather...?</p>
      <div className="flex w-11/12 justify-between">
        <div className="w-48 bg-transparent text-blue-700 font-semibold  rounded text-center">
          <div className="py-2 px-4 border border-blue-500 rounded-t">
            {optionOne.text}
          </div>
          <button className="w-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 b-t-none hover:border-transparent rounded-b">
            Select
          </button>
        </div>
        <div className="w-48 bg-transparent text-blue-700 font-semibold  rounded text-center">
          <div className="py-2 px-4 border border-blue-500 rounded-t">
            {optionTwo.text}
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
