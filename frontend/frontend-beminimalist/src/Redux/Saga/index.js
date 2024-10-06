import { all } from "redux-saga/effects";
import Login from "./auth/loginSaga";
import Logout from "./auth/logoutSaga";
import Signup from "./auth/signupSaga";
import GetSkinProduct from "./product/skinProductSaga";
import GetHairProduct from "./product/hairProductSaga";
import GetBathNBodyProduct from "./product/bathNBodyProductSaga";
import GetAllProduct from "./product/allProductSaga";

export default function* rootSaga() {
  yield all([
    Signup(),
    Login(),
    Logout(),
    GetSkinProduct(),
    GetHairProduct(),
    GetBathNBodyProduct(),
    GetAllProduct()
  ]);
}
