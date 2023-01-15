import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const QuestionCard = ({ question }) => {
  const { author, timestamp, id } = question;
  const dateFormated = moment(timestamp).format("LT [|] l");

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-center ">
      <p className="bold">{author}</p>
      <span className="opacity-60 mb-4 block text-sm">{dateFormated}</span>
      <Link to={`/questions/${id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-4 border my-2 border-blue-700 rounded disabled:opacity-50 w-full">
          Show
        </button>
      </Link>
    </div>
  );
};

export default QuestionCard;
