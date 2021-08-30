import { all, fork } from "redux-saga/effects";
import getAPISaga from "./test";

//중단점이 있는 함수(제너레이터)
export default function* rootSaga() {
  yield all([fork(getAPISaga)]); //제너레이터 함수를 배열의 형태로 인자로 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolve될때까지 기다림.
  //Promise.all과 비슷한듯?
}
