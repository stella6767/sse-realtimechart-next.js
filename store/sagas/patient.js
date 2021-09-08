import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { findAll } from "../lib/patient";
import {
  PATIENT_FAILURE,
  PATIENT_REQUEST,
  PATIENT_SUCCESS,
} from "../reducers/patient";

function* loadPatients() {
  try {
    const result = yield call(findAll);

    console.log("result", result);

    yield put({
      type: PATIENT_SUCCESS,
      data: result.data,
    });
  } catch {
    console.error(err);
    yield put({
      type: PATIENT_FAILURE,
      error: err.response.data,
    });
  }
}

//action을 감지하기 위한 watchTest 함수를 생성
function* watchPatients() {
  yield takeLatest(PATIENT_REQUEST, loadPatients);
}

export default function* patientSaga() {
  yield all([fork(watchPatients)]); //함수의 비동기적인 호출을 할때 fork 사용,call과 달리 순서 상관 없이 실행할때 사용
}
