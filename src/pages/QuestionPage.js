import React from "react";
import { HiCheck } from "react-icons/hi";

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

  const question = questionsObj[question_id];

  if (!question) {
    return <ErrorPage message={"This question doesn't exist."} />;
  }

  const authedUserInfo = users[authedUser];
  const answeredQuestionsIDs = Object.keys(authedUserInfo.answers);
  const selectedOption = authedUserInfo.answers[question_id];

  const isQuestionAnswered = answeredQuestionsIDs.includes(question_id)
    ? true
    : false;

  const questionAuthor = Object.values(users).filter(
    (user) => user.id === question.author
  )[0];

  return (
    <div className="content-container flex flex-col items-center space-y-4">
      <h1>Poll by {questionAuthor.name}</h1>
      <img src={questionAuthor.avatarURL} alt={questionAuthor.name} width="80"/>
      <p className="subtitle font-semibold">Would You Rather...?</p>
      {isQuestionAnswered ? (
        <PollResults
          question={question}
          selectedOption={selectedOption}
        />
      ) : (
        <PollForm question={question} />
      )}
    </div>
  );
};

export default QuestionPage;
