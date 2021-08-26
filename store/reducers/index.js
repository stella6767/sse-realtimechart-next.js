import { combineReducers } from "redux";
import { reducer as API } from "./PatientAPI";
const rootReducer = combineReducers({
  API,
});

export default rootReducer;
