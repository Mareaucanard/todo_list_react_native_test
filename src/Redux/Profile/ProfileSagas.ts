import { put, call, takeLatest, all, fork } from "redux-saga/effects"
import {
  getProfileRoute,
  updateProfileRoute,
  deleteProfileRoute,
} from "../../Service/ProfileService"
import * as ProfileCreator from "./ProfileCreator"
import API from "../../Service/API"

function* getProfileCall() {
  try {
    const { data } = yield call(getProfileRoute)
    const { id, email, name, firstname } = data

    yield put(ProfileCreator.getProfile.success({ id, email, name, firstname }))
  } catch (error) {
    yield put(ProfileCreator.getProfile.failure({ error }))
  }
}

function* updateProfileCall({
  payload: { id, email, password, firstname, name },
}: ReturnType<typeof ProfileCreator.updateProfile.request>) {
  const params = { email, password, firstname, name }
  try {
    const { data } = yield call(updateProfileRoute, id, params)
    const { email, firstname, name } = data

    yield put(
      ProfileCreator.updateProfile.success({ id, email, name, firstname })
    )
  } catch (error: any) {
    yield put(ProfileCreator.updateProfile.failure({ error }))
  }
}

function* deleteProfileCall({
  payload: { id },
}: ReturnType<typeof ProfileCreator.deleteProfile.request>) {
  try {
    const { data } = yield call(deleteProfileRoute, id)

    yield put(ProfileCreator.deleteProfile.success({ msg: data.msg }))
  } catch (error: any) {
    yield put(ProfileCreator.deleteProfile.failure({ error }))
  }
}

function* watchOnProfile() {
  yield takeLatest(ProfileCreator.getProfile.REQUEST, getProfileCall)
  yield takeLatest(ProfileCreator.updateProfile.REQUEST, updateProfileCall)
  yield takeLatest(ProfileCreator.deleteProfile.REQUEST, deleteProfileCall)
}

export default function* profileSagas() {
  yield all([fork(watchOnProfile)])
}
