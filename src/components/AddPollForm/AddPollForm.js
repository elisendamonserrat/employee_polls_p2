import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../../actions/shared";

const defaultPollState = {
  optionOne: "",
  optionTwo: "",
};

const AddPollForm = () => {
  const [newPoll, setNewPoll] = useState({
    optionOne: "",
    optionTwo: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setNewPoll((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(newPoll));
    setNewPoll(defaultPollState);
    navigate("/");
  };

  return (
    <>
      <form
        className="bg-white border shadow-md rounded px-8 pt-8 pb-8 mb-4 mt-8 text-left"
        onSubmit={handleSubmit}
      >
        <p className="subtitle mb-4 font-bold">Would You Rather...?</p>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="optionOne">
            First Option
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="optionOne"
            name="optionOne"
            type="text"
            placeholder="Write here your first option"
            value={newPoll.optionOne}
            onChange={handleChange}
            data-testid="optionOne"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="optionTwo">
            Second Option
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="optionTwo"
            type="text"
            name="optionTwo"
            placeholder="Write here your second option"
            value={newPoll.optionTwo}
            onChange={handleChange}
            data-testid="optionTwo"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn-accent"
            type="submit"
            disabled={newPoll.optionOne === "" || newPoll.optionTwo === ""}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPollForm;
