import React from "react";
import { HiCheck } from "react-icons/hi";
import { calculatePercentage, capitalizeStr, sum } from "../utils";

const PollResults = ({ question, selectedOption }) => {
  const { optionOne, optionTwo } = question;

  const totalVotes = sum(optionOne.votes.length, optionTwo.votes.length);

  const selectedOptionsStyles =
    "bg-blue-500 text-white border-b-4 border-blue-500 flex items-center justify-between";
  return (
    <>
      <p>Poll already answered. See below the stats!</p>
      <div className="flex flex-col w-11/12">
        <div className="mt-2 flex flex-col items-center space-y-4 w-full">
          <div
            className={`bg-blue-50 py-4 px-2 w-full md:w-7/12 rounded hover:cursor-pointer border-b-4  ${
              selectedOption === "optionOne" && selectedOptionsStyles
            }`}
          >
            <span className="ml-2">{capitalizeStr(optionOne.text)}</span>
            {selectedOption === "optionOne" && (
              <HiCheck className="h-6 w-8 text-green-500" />
            )}
          </div>
          <div className="bg-blue-500 py-4 px-2 w-full md:w-7/12 rounded hover:cursor-pointer">
            <span className="ml-2 text-white font-semibold">
              {optionOne.votes.length}/{totalVotes} Answers
            </span>
            <span className="mx-2 text-white font-semibold">|</span>
            <span className="text-white font-semibold">
              {calculatePercentage(optionOne.votes.length, totalVotes)}% Votes
            </span>
          </div>

          <div
            className={`bg-blue-50 py-4 px-2 w-full md:w-7/12 rounded hover:cursor-pointer border-b-4  ${
              selectedOption === "optionTwo" && selectedOptionsStyles
            }`}
          >
            <span className="ml-2">{capitalizeStr(optionTwo.text)}</span>
            {selectedOption === "optionTwo" && (
              <HiCheck className="h-6 w-8 text-green-500" />
            )}
          </div>
          <div className="bg-blue-500 py-4 px-2 w-full md:w-7/12 rounded hover:cursor-pointer">
            <span className="ml-2 text-white font-semibold">
              {optionTwo.votes.length}/{totalVotes} Answers
            </span>
            <span className="mx-2 text-white font-semibold">|</span>
            <span className="text-white font-semibold">
              {calculatePercentage(optionTwo.votes.length, totalVotes)}% Votes
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PollResults;
