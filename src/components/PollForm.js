import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { handleAnswerQuestion } from "../actions/shared";
import { capitalizeStr } from "../utils";

const PollForm = ({ question }) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const { optionOne, optionTwo } = question;

  const handleChange = (e, option) => {
    e.preventDefault();
    setAnswer(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qid = question.id;
    dispatch(handleAnswerQuestion(answer, qid));
    setAnswer("");
  };

  const selectedOptionsStyles =
    "bg-blue-500 text-white border-b-4 border-blue-500 flex items-center justify-between";

  return (
    <div className="flex flex-col w-full md:w-11/12">
      <div className="mb-6">
        <div className="mt-2 flex flex-col items-center space-y-4">
          <p className="text-sm w-full md:w-7/12 self-center ">
            Select one of the options below:
          </p>
          <div
            className={`bg-blue-50 py-4 px-2 w-full md:w-7/12 rounded hover:cursor-pointer border-b-4  ${
              answer === "optionOne" && selectedOptionsStyles
            }`}
            onClick={(e) => handleChange(e, "optionOne")}
          >
            <span className="ml-2">{capitalizeStr(optionOne.text)}</span>
            {answer === "optionOne" && (
              <HiCheck className="h-6 w-8 text-green-500" />
            )}
          </div>
          <div
            className={`bg-blue-50 py-4 px-2 w-full md:w-7/12 rounded hover:cursor-pointer border-b-4  ${
              answer === "optionTwo" && selectedOptionsStyles
            }`}
            onClick={(e) => handleChange(e, "optionTwo")}
          >
            <span className="ml-2">{capitalizeStr(optionTwo.text)}</span>
            {answer === "optionTwo" && (
              <HiCheck className="h-6 w-8 text-green-500" />
            )}
          </div>
        </div>
      </div>
      <div className="mb-6 w-full md:w-7/12 self-center">
        <button type="submit" className="btn-accent" onClick={handleSubmit}>
          SUBMIT ANSWER
        </button>
      </div>
    </div>
  );
};

export default PollForm;
