import React, { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { useSelector } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import QuestionsContainer from "../components/QuestionsContainer";

const HomePage = () => {
  const [switchPolls, setSwicthPolls] = useState(false);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const authedUserInfo = users[authedUser];

  const answeredQuestions = Object.keys(authedUserInfo.answers);

  const newQuestions = Object.values(questions).filter(
    (question) => !answeredQuestions.includes(question?.id)
  );
  console.log("newQuestions", newQuestions);
  console.log("answeredQuestions", answeredQuestions);

  const handleSwicth = () => {};

  return (
    <div className="content-container relative">
      <button
        className="p-1.5 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:border-blue-500 absolute switch-btn"
        onClick={() =>
          setSwicthPolls((switchPolls) => (switchPolls = !switchPolls))
        }
      >
        <HiOutlineSwitchVertical className="h-6 w-6 text-blue-500" />
      </button>
      <div
        className={` flex flex-col ${switchPolls ? "flex-col-reverse" : ""}`}
      >
        <QuestionsContainer headline={"New Questions"}>
          {newQuestions &&
            newQuestions.map((question) => {
              return <QuestionCard question={question} key={question.id} />;
            })}
        </QuestionsContainer>
        <QuestionsContainer headline={"Done"}>
          {answeredQuestions &&
            answeredQuestions.map((id) => {
              let question = questions[id];
              return <QuestionCard question={question} key={question.id} />;
            })}
        </QuestionsContainer>
      </div>
    </div>
  );
};

export default HomePage;
