/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { setAuthedUser } from "../../actions/authedUser";

import AddPollForm from "./AddPollForm";

describe("PollForm", () => {
  it("won't match the snapshot when the user  types in the questions", async () => {
    // const users = await _getUsers();
    store.dispatch(setAuthedUser("sarahedo"));
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <AddPollForm />
        </Provider>
      </MemoryRouter>
    );
    const optionOneInput = component.getByTestId("optionOne");
    const optionTwoInput = component.getByTestId("optionTwo");
    fireEvent.change(optionOneInput, { target: { value: "Learning Jest" } });
    fireEvent.change(optionTwoInput, { target: { value: "Learning Mocha" } });
    expect(component).toMatchSnapshot();
  });
});
