/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { setAuthedUser } from "../../actions/authedUser";
import { _getUsers } from "../../utils/_DATA/_DATA";
import { receiveUsers } from "../../actions/users";

import Navbar from "./Navbar";

describe("Navbar changes authed Users", () => {
  it("should remove logout button when user clicks on logout", async () => {
    const users = await _getUsers();
    store.dispatch(setAuthedUser("sarahedo"));
    store.dispatch(receiveUsers(users));

    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );
    const logoutButton = getByText("Logout");
    fireEvent.click(logoutButton);
    expect(logoutButton).not.toBeInTheDocument();
  });

  it("logout button and user's id name will show when the user is logged in", async () => {
    const users = await _getUsers();
    store.dispatch(setAuthedUser("sarahedo"));
    store.dispatch(receiveUsers(users));

    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );
    const logoutButton = getByText("Logout");
    const usersID = getByText("sarahedo");
    expect(logoutButton).toBeInTheDocument();
    expect(usersID).toBeInTheDocument();
  });
});
