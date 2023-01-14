import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const QuestionCard = ({ question }) => {
  const { author, timestamp, id } = question;
  const dateFormated = moment(timestamp).format("LT [|] l");

  return (
    <div>
      <p>{author}</p>
      <span>{dateFormated}</span>
      <Link to={`/questions/${id}`}>
        <button>Show</button>
      </Link>
    </div>
  );
};

export default QuestionCard;
