import { all, fork } from 'redux-saga/effects'

import authSaga from './sagas/auth'
import errorSaga from './sagas/error'

export default function* () {
  yield all([
    fork(authSaga),
    fork(errorSaga),
  ])
}