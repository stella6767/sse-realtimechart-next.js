import { all, fork } from "redux-saga/effects";
import testSaga from "./test";

//중단점이 있는 함수(제너레이터)
export default function* rootSaga() {
  yield all([fork(testSaga)]);
}
