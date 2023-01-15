import React from "react";
import { HiCheck } from "react-icons/hi";
import { calculatePercentage, capitalizeStr, sum } from "../utils";

const PollResults = ({ question, selectedOption }) => {
  const { optionOne, optionTwo } = question;

  const totalVotes = sum(optionOne.votes.length, optionTwo.votes.length);

  return (
    <>
      <p>Poll already answered. See below the stats!</p>
      <div className="flex w-full justify-between">
        <div className="w-48 bg-transparent text-blue-700 font-semibold border border-blue-500 rounded text-center">
          <div className="py-2 px-2">{capitalizeStr(optionOne.text)}</div>
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
            {calculatePercentage(optionOne.votes.length, totalVotes)}%)
          </div>
        </div>
        <div className="w-48 bg-transparent text-blue-700 font-semibold border border-blue-500 rounded text-center">
          <div className=" py-2 px-4 ">{capitalizeStr(optionTwo.text)}</div>
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
            {calculatePercentage(optionTwo.votes.length, totalVotes)}%)
          </div>
        </div>
      </div>
    </>
  );
};

export default PollResults;
