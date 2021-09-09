import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { findAll, findByPatientUserIdOrName } from "../lib/patient";
import {
  PATIENT_FAILURE,
  PATIENT_FINDBYNAMEORID_FAILURE,
  PATIENT_FINDBYNAMEORID_REQUEST,
  PATIENT_FINDBYNAMEORID_SUCCESS,
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
  } catch (err) {
    console.error(err);
    yield put({
      type: PATIENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* loadPatientsByNameOrId(action) {
  try {
    const result = yield call(findByPatientUserIdOrName, action.payload);

    console.log("result", result);

    yield put({
      type: PATIENT_FINDBYNAMEORID_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error("error", err);
    yield put({
      type: PATIENT_FINDBYNAMEORID_FAILURE,
      error: err.response.data,
    });
  }
}

//action을 감지하기 위한 watchTest 함수를 생성
function* watchPatients() {
  console.log("트리거");
  yield takeLatest(PATIENT_REQUEST, loadPatients);
}

function* watchPatientsByName() {
  yield takeLatest(PATIENT_FINDBYNAMEORID_REQUEST, loadPatientsByNameOrId);
}

export default function* patientSaga() {
  yield all([fork(watchPatients), fork(watchPatientsByName)]); //함수의 비동기적인 호출을 할때 fork 사용,call과 달리 순서 상관 없이 실행할때 사용
}
