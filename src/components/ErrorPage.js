import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ message }) => {
  return (
    <div className="content-container text-center ">
      <h1>Oups seems like we found an Error</h1>
      <p className="subtitle my-6">Error: {message}</p>

      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline w-2/12"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
