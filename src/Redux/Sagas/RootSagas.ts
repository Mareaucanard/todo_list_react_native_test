import AuthSagas from "../Auth/AuthSagas";
import {all, fork} from  "redux-saga/effects"

export default function* () {
    yield all([fork(AuthSagas)]);
}
