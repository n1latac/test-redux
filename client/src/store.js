import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from '@redux-devtools/extension'

import reducer from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store