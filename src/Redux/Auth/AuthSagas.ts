import { put, call, takeLatest, all, fork } from "redux-saga/effects"
import { loginRoute, registerRoute } from "../../Service/AuthService"
import * as AuthCreator from "./AuthCreator"

function* registerCall({
  payload: { email, password, firstname, name },
}: ReturnType<typeof AuthCreator.register.request>) {
  const params = { email, password, firstname, name }
  try {
    const { data } = yield call(registerRoute, params)
    const { token, msg } = data

    if (token === undefined) {
      yield put(AuthCreator.register.failure({ msg, code: -1 }))
    } else {
      yield put(AuthCreator.register.success({ token }))
    }
  } catch (error: any) {
    yield put(AuthCreator.register.failure({ msg: "Error: " + error.toString(), code: -1 }))
  }
}

function* loginCall({
  payload: { email, password },
}: ReturnType<typeof AuthCreator.login.request>) {
  const params = { email, password }
  try {
    const { data } = yield call(loginRoute, params)
    const { token } = data

    yield put(AuthCreator.login.success({ token }))
  } catch (error: any) {
    yield put(AuthCreator.login.failure({ msg: "Error: " + error.toString(), code: -1 }))
  }
}

function* watchOnAuth() {
  yield takeLatest(AuthCreator.login.REQUEST, loginCall)
  yield takeLatest(AuthCreator.register.REQUEST, registerCall)
}

export default function* authSagas() {
  yield all([fork(watchOnAuth)])
}
