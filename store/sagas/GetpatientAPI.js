import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

function* fetchData(action) {
  try {
    const { data } = yield call(
      axios.get("http://bilabcsapi.lunalabs.net/test")
    );
    yield put(actions.success(data));
  } catch (error) {
    yield put(actions.fail(error.response));
  }
}

export default function* watchSearch() {
  yield takeEvery(actions.SUCCESS, fetchData);
}
