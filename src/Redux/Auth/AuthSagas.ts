import { login, register, Actions, LoginSuccessAction } from "./AuthCreator";
import { put, call, all, fork, takeLatest, take } from "redux-saga/effects";
import { loginRoute, registerRoute } from "../../Service/AuthService";

function* registerCall({
  payload: { email, password, firstname, name },
}: ReturnType<typeof register.request>) {
  const params = { email, password, firstname, name };
  try {
    const { data } = yield call(registerRoute, params);
    const { token, msg } = data;

    if (token === undefined) {
      yield put(register.failure({ msg }));
    } else {
      yield put(register.success({ token }));
    }
  } catch (error: any) {
    yield put(register.failure({ msg: "Error: " + error.toString() }));
  }
}

function* loginCall({
  payload: { email, password },
}: ReturnType<typeof login.request>) {
  const params = { email, password };
  try {
    const { data } = yield call(loginRoute, params);
    const { token, msg } = data;

    if (token === undefined) {
      yield put(login.failure({ msg }));
    } else {
      yield put(login.sucess({ token }));
    }
  } catch (error: any) {
    yield put(login.failure({ msg: "Error: " + error.toString() }));
  }
}
