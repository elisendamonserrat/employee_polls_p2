import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import PollForm from "../components/PollForm";
import PollResults from "../components/PollResults";

const QuestionPage = () => {
  let { question_id } = useParams();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questionsObj = useSelector((state) => state.questions);

  const selectedQuestion = questionsObj[question_id];

  if (!selectedQuestion) {
    return <ErrorPage message={"This question doesn't exist."} />;
  }

  const authedUserInfo = users[authedUser];
  const answeredQuestionsIDs = Object.keys(authedUserInfo.answers);
  const selectedOption = authedUserInfo.answers[question_id];

  const isQuestionAnswered = answeredQuestionsIDs.includes(question_id)
    ? true
    : false;

  const questionAuthor = Object.values(users).filter(
    (user) => user.id === selectedQuestion.author
  )[0];

  return isQuestionAnswered ? (
    <PollResults question={selectedQuestion} selectedOption={selectedOption} author={questionAuthor} />
  ) : (
      <PollForm question={selectedQuestion} author={questionAuthor} />
  );
};

export default QuestionPage;
