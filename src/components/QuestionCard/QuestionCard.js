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
        <button className="btn-accent">
          Show
        </button>
      </Link>
    </div>
  );
};

export default QuestionCard;
