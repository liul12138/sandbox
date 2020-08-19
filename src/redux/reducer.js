import { INCREASE, DECREASE } from "./actioncreater";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
const initState = {
  count: 2
};
const numReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, { count: state.count + 1 });

    case DECREASE:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};
let store = createStore(numReducer, applyMiddleware(createLogger, thunk));
export default store;
