import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { TEST_FAILURE, TEST_REQUEST, TEST_SUCCESS } from "../reducers/test";
import { testApiModule } from "../apiTest";

function testAPI() {
  return testApiModule(); //axios 호출
}

function* test() {
  try {
    console.log("saga Test");
    const result = yield call(testAPI);
    console.log(result.data);
    //put은 dispatch와 같다 reducer로 값을 전달해줌
    //액션 타입이 TEST_SUCCESS로 dispatch 해줌
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

//action을 감지하기 위한 watchTest 함수를 생성
function* watchTest() {
  yield takeLatest(TEST_REQUEST, test); //TEST_REQUEST 액션에 대해서 기존에 진행중이던 작업이 있다면 취소 처리 하고, 가장 마지막으로 실행된 작업에 대해서만 test 함수를 실행.
  // (실수로 로그인이나 회원가입 버튼을 연달아 누르는 경우 서버에 요청이 여러 번 가지 않도록 할 때 사용)
}

export default function* testSaga() {
  yield all([fork(watchTest)]); //함수의 비동기적인 호출을 할때 fork 사용,call과 달리 순서 상관 없이 실행할때 사용
}
