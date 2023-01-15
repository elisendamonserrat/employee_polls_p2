import React, { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { useSelector } from "react-redux";
import QuestionCard from "../components/QuestionCard";
import QuestionsContainer from "../components/QuestionsContainer";

const HomePage = () => {
  const [switchPolls, setSwicthPolls] = useState(false);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questionsObj = useSelector((state) => state.questions);

  const authedUserInfo = users[authedUser];

  const sortedQuestionsArr = Object.values(questionsObj).sort(function (x, y) {
    return y.timestamp - x.timestamp;
  });

  const answeredQuestionsIDs = Object.keys(authedUserInfo.answers);
  const answeredQuestionsArr = sortedQuestionsArr.filter((question) =>
    answeredQuestionsIDs.includes(question?.id)
  );

  const newQuestionsArr = sortedQuestionsArr.filter(
    (question) => !answeredQuestionsIDs.includes(question?.id)
  );

  return (
    <div className="content-container">
      <div className="flex items-center justify-end">
        <p className="text-sm mr-2 opacity-70">Swicth Questions</p>
        <button
          className="p-1.5 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:border-blue-500 switch-btn"
          onClick={() =>
            setSwicthPolls((switchPolls) => (switchPolls = !switchPolls))
          }
        >
          <HiOutlineSwitchVertical className="h-4 w-4 text-blue-500" />
        </button>
      </div>
      <div
        className={` flex flex-col ${switchPolls ? "flex-col-reverse" : ""}`}
      >
        <QuestionsContainer headline={"New Questions"}>
          {newQuestionsArr &&
            newQuestionsArr.map((question) => {
              return <QuestionCard question={question} key={question.id} />;
            })}
        </QuestionsContainer>
        <QuestionsContainer headline={"Done"}>
          {answeredQuestionsArr &&
            answeredQuestionsArr.map((question) => {
              return <QuestionCard question={question} key={question.id} />;
            })}
        </QuestionsContainer>
      </div>
    </div>
  );
};

export default HomePage;
