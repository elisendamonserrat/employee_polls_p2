import reducer from "../reducers/index";
import { createStore } from "redux";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

export default store;
