import React from "react";
import { capitalizeStr } from "../utils";

const PollForm = ({ question }) => {
  const { optionOne, optionTwo } = question;
  return (
    <div className="flex w-11/12 justify-between">
      <div className="w-48 bg-transparent text-blue-700 font-semibold  rounded text-center">
        <div className="py-2 px-4 border border-blue-500 rounded-t">
          {capitalizeStr(optionOne.text)}
        </div>
        <button className="w-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 b-t-none hover:border-transparent rounded-b">
          Select
        </button>
      </div>
      <div className="w-48 bg-transparent text-blue-700 font-semibold  rounded text-center">
        <div className="py-2 px-4 border border-blue-500 rounded-t">
          {capitalizeStr(optionTwo.text)}
        </div>
        <button className="w-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 b-t-none hover:border-transparent rounded-b">
          Select
        </button>
      </div>
    </div>
  );
};

export default PollForm;
