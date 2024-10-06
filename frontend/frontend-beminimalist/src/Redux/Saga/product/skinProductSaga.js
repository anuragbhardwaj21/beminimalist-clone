import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { getSkinProductSuccess, getSkinProductFailure } from "../../Action/product/skinProductAction";
import { GET_SKIN_PRODUCT } from "../../Action/actionTypes";

function* getSkinProductRequest(action) {
  try {
    console.log("dataaa");
    const { data } = yield call(API.get, "/products/skin");
    console.log("dataaa",data);
    
    if (data) {
      yield put(getSkinProductSuccess(data?.data));
      yield call(action?.payload?.callback, data?.data);
    } else {
      yield put(getSkinProductFailure());
    }
  } catch (error) {
    yield put(getSkinProductFailure());
  }
}

export function* watchgetSkinProductAPI() {
  yield takeEvery(GET_SKIN_PRODUCT, getSkinProductRequest);
}

export default function* rootSaga() {
  yield all([watchgetSkinProductAPI()]);
}