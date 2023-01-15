import React from "react";
import { useSelector } from "react-redux";

const LeaderBoardPage = () => {
  const usersObj = useSelector((state) => state.users);

  const sortedUsersArr = Object.values(usersObj).sort((a, b) => {
    const aNumQuestions = a.questions.length;
    const bNumQuestions = b.questions.length;

    const aNumAnswers = Object.values(a.answers).length;
    const bNumAnswers = Object.values(b.answers).length;

    if (aNumQuestions === bNumQuestions) {
      return aNumAnswers < bNumAnswers ? 1 : -1;
    } else {
      return aNumQuestions < bNumQuestions ? 1 : -1;
    }
  });

  return (
    <div className="content-container">
      <h1>LeaderBoard</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-blue-500 border-blue-50">
                  <tr>
                    <th scope="col" className="table-heading">
                      Users
                    </th>
                    <th scope="col" className="table-heading">
                      Answered
                    </th>
                    <th scope="col" className="table-heading">
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsersArr.map((user, i) => {
                    return (
                      <tr
                        key={user.id}
                        className={`bg-white border-b ${
                          i === 0 && "bg-blue-100 border-b-4 text-white"
                        }`}
                      >
                        <td className="table-td-data">
                          <img
                            src={
                              !user.avatarURL || user.avatarURL === null
                                ? "https://www.shareicon.net/data/128x128/2015/10/03/650430_users_512x512.png"
                                : user.avatarURL
                            }
                            alt={user.name}
                            width="40"
                          />
                          <div className="ml-4 text-left">
                            <p className="text-base font-semibold">
                              {user.name}
                            </p>
                            <p className="opacity-60">{user.id}</p>
                          </div>
                        </td>
                        <td className="table-stats">
                          {Object.keys(user.answers).length}
                        </td>
                        <td className="table-stats">{user.questions.length}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
