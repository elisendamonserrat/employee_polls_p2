import React from "react";
import AddPollForm from "../components/AddPollForm/AddPollForm";

const NewPollPage = () => {
  return (
    <div className="content-container text-center">
      <h1 className="mb-2">Create Your Own Poll</h1>
      <AddPollForm />
    </div>
  );
};

export default NewPollPage;
