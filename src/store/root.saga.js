import {fork} from 'redux-saga/effects'

import { shopSagas } from './actions/shop.saga'

export default function* rootSaga() {
    yield fork(shopSagas);
}