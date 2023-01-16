/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";

import Navbar from "./Navbar";

test("renders navbar", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </MemoryRouter>
  );

  expect(getByText('Home')).toBeInTheDocument();
});
