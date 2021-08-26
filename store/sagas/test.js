import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { TEST_FAILURE, TEST_REQUEST, TEST_SUCCESS } from "../reducers/test";
import { testApiModule } from "../apiTest";

function testAPI() {
  return testApiModule();
}

function* test(action) {
  try {
    console.log("saga Test");
    const result = yield call(testAPI);

    console.log("result", result);

    console.log(result.data);

    yield put({
      type: TEST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: TEST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchTest() {
  yield takeLatest(TEST_REQUEST, test);
}

export default function* testSaga() {
  yield all([fork(watchTest)]);
}
