import React from "react";
import { HiCheck } from "react-icons/hi";

const PollResults = ({ question, selectedOption, author }) => {
  const { optionOne, optionTwo } = question;
  const { avatarURL, name } = author;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const votesStats = (votes, total) => ((votes / total) * 100).toFixed("");

  return (
    <div className="content-container flex flex-col items-center space-y-4">
      <h1>Poll by {name}</h1>
      <img src={avatarURL} alt={name} />
      <p>Poll already answered. See below the stats!</p>
      <p className="subtitle font-semibold">Would You Rather...?</p>
      <div className="flex w-full justify-between">
        <div className="w-48 bg-transparent text-blue-700 font-semibold border border-blue-500 rounded text-center">
          <div className="py-2 px-2">{optionOne.text}</div>
          <div className="bg-blue-100 py-2 px-4">
            <span className="flex items-center justify-center">
              {selectedOption === "optionOne" ? (
                <HiCheck className="h-6 w-8 text-green-500" />
              ) : (
                ""
              )}
              Selected
            </span>
          </div>
          <div className="bg-blue-400 py-2 px-4 text-white">
            Total Votes {optionOne.votes.length} (
            {votesStats(optionOne.votes.length, totalVotes)}%)
          </div>
        </div>
        <div className="w-48 bg-transparent text-blue-700 font-semibold border border-blue-500 rounded text-center">
          <div className=" py-2 px-4 ">{optionTwo.text}</div>
          <div className="bg-blue-100 py-2 px-4">
            <span className="flex items-center justify-center space-x-1">
              {selectedOption === "optionTwo" ? (
                <HiCheck className="h-6 w-8 text-green-500" />
              ) : (
                ""
              )}
              Selected
            </span>
          </div>
          <div className="bg-blue-400 py-2 px-4 text-white">
            Total Votes {optionTwo.votes.length} (
            {votesStats(optionTwo.votes.length, totalVotes)}%)
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollResults;
