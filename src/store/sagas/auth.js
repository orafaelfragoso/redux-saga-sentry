import { takeLatest, put } from 'redux-saga/effects'

function* authenticate() {
  try {
    throw new Error('Erro na autenticação!')
  } catch (error) {
    yield put({ type: 'AUTH_FAILURE', error })
    yield put({ type: 'ERROR', error })
  }
}

export default function* () {
  yield takeLatest('AUTH', authenticate)
}
