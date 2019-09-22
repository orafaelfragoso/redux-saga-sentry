import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as Sentry from '@sentry/browser'

import sagas from './rootSaga'
import reducers from './rootReducer'

Sentry.init({ dsn: 'SEU_DSN_AQUI' })

const sagaMiddleware = createSagaMiddleware({
  onError(err) {
    Sentry.captureException(err)
  },
})

export default function Store() {
  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
  )

  sagaMiddleware.run(sagas)

  return store
}
