import AuthSagas from "../Auth/AuthSagas"
import ProfileSagas from "../Profile/ProfileSagas"
import {all, fork} from  "redux-saga/effects"

export default function* () {
    yield all([fork(AuthSagas)])
    yield all([fork(ProfileSagas)])
}
