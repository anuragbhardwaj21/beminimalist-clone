import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  notifyError,
  notifySuccess,
  setLocalStorageItem,
} from "../../../Utils/helper";
import { loginFailure, loginSuccess } from "../../Action/auth/loginAction";
import { LOGIN } from "../../Action/actionTypes";

function* loginRequest(action) {
  try {
    const { data } = yield API.post("/login", action?.payload?.payload);

    if (data?.meta?.code === 200) {
      yield put(loginSuccess(data?.data));
      yield call(setLocalStorageItem, "userData", JSON.stringify(data?.data));
      yield call(setLocalStorageItem, "token", data?.meta?.token);
      notifySuccess("Logged In Successfully.");
      yield call(action?.payload?.callback, data);
    } else {
      notifyError("Error Loggin In.");
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(loginFailure());
    notifyError("Internal Server Error.");
  }
}

export function* watchLoginAPI() {
  yield takeEvery(LOGIN, loginRequest);
}

export default function* rootSaga() {
  yield all([watchLoginAPI()]);
}
