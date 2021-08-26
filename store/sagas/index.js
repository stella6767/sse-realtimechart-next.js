import { spawn } from "redux-saga/effects";
import getapi from "./GetpatientAPI";
export default function* rootSaga() {
  yield spawn(getapi);
}
