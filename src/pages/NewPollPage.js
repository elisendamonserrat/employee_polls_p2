import React from "react";

const NewPollPage = () => {
  return (
    <div className="content-container text-center">
      <h1 className="mb-2">Create Your Own Poll</h1>
      <form class="bg-white border shadow-md rounded px-8 pt-8 pb-8 mb-4 mt-8 text-left">
        <p className="subtitle mb-4 font-bold">Would You Rather...?</p>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" htmlFor="option1">
            First Option
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="option1"
            type="text"
            placeholder="Write here your first option"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" htmlFor="option2">
            Second Option
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="option2"
            type="text"
            placeholder="Write here your second option"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPollPage;
