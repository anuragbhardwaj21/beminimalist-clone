import { all, call, put, takeEvery } from "redux-saga/effects";
import { removeLocalStorageItem } from "../../../Utils/helper";
import { logoutSuccess, logoutFailure } from "../../Action/auth/logoutAction";
import { LOGOUT } from "../../Action/actionTypes";

function* logoutRequest(action) {
  try {

    yield call(removeLocalStorageItem, "userData");
    yield call(removeLocalStorageItem, "token");

    yield put(logoutSuccess());

    if (action?.callback) {
      yield call(action.callback);
    }
  } catch (error) {
    yield put(logoutFailure());
  }
}

export function* watchLogoutAPI() {
  yield takeEvery(LOGOUT, logoutRequest);
}

export default function* rootSaga() {
  yield all([watchLogoutAPI()]);
}
