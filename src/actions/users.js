import { _getUsers } from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleRecievUsers() {
  return (dispatch) => {
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users));
      })
      .catch((error) => console.log("Error: ", error.message));
  };
}
