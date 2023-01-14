import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "../components/QuestionCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const authedUserInfo = users[authedUser];

  const answeredQuestions = Object.keys(authedUserInfo.answers);

  const newQuestions = Object.values(questions).filter(
    (question) => !answeredQuestions.includes(question.id)
  );

  return (
    <div>
      <div className="questions-container">
        <h2>New Questions</h2>
        {newQuestions.map((question) => {
           return <QuestionCard question={question} key={question.id} />;
        })}
      </div>
      <div className="questions-container">
        <h2>Done</h2>
        {answeredQuestions.map((id) => {
          let question = questions[id];
         return <QuestionCard question={question} key={question.id} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
