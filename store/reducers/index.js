import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import test from "./test";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  test,
});

export default rootReducer;
