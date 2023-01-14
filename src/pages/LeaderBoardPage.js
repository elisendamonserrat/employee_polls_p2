import React from "react";

const LeaderBoardPage = () => {
  return (
    <div className="content-container">
      <h1>LeaderBoard</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-blue-50">
                  <tr>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Users
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Answered
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4">
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      1
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      2
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                  </tr>
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
