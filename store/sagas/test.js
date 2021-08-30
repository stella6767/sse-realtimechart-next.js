import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { TEST_FAILURE, TEST_REQUEST, TEST_SUCCESS } from "../reducers/test";
import {
  PATIENT_GET,
  PATIENT_FAIL,
  PATIENT_REQUEST,
} from "../reducers/patient";
import { testApiModule } from "../apiTest";
import { getpatientAPI } from "../lib/PatientAPI";

function testAPI() {
  return testApiModule(); //axios 호출
}

const getpatientapi = () => {
  return getpatientAPI();
};

function* test() {
  try {
    const result = yield call(testAPI);
    //put은 dispatch와 같다 reducer로 값을 전달해줌
    //액션 타입이 TEST_SUCCESS로 dispatch 해줌
    yield put({
      type: TEST_SUCCESS,
      data: result.data,
    });
    // while (true) {
    //   console.log("saga Test");
    //   const result = yield call(testAPI);
    //   console.log(result.data);
    //   yield delay(1000);
    //   yield put({
    //     type: TEST_SUCCESS,
    //     data: result.data,
    //   });
    // }
  } catch (err) {
    console.error(err);
    yield put({
      type: TEST_FAILURE,
      error: err.response.data,
    });
  }
}

function* GetPatientAPI() {
  try {
    const getPatientdata = yield call(getpatientapi);
    yield put({
      type: PATIENT_GET,
      data: getPatientdata.dummy,
    });
  } catch {
    console.error(err);
    yield put({
      type: PATIENT_FAIL,
      error: err.response.data,
    });
  }
}

//action을 감지하기 위한 watchTest 함수를 생성
function* watchTest() {
  yield takeLatest(TEST_REQUEST, test); //TEST_REQUEST 액션에 대해서 기존에 진행중이던 작업이 있다면 취소 처리 하고, 가장 마지막으로 실행된 작업에 대해서만 test 함수를 실행.
  yield takeLatest(PATIENT_REQUEST, GetPatientAPI);
}

export default function* getAPISaga() {
  yield all([fork(watchTest)]); //함수의 비동기적인 호출을 할때 fork 사용,call과 달리 순서 상관 없이 실행할때 사용
}
