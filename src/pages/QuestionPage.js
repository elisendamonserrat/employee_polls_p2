import React from "react";
import { useLocation } from "react-router-dom";
import PollForm from "../components/PollForm";
import PollResults from "../components/PollResults";

const QuestionPage = () => {
  const location = useLocation();

  const isQuestionAnswered = location.state?.isQuestionAnswered;

  return isQuestionAnswered ? <PollResults /> : <PollForm />;
};

export default QuestionPage;
