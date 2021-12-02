// import * as actionTypes from './actionTypes'
import {put,  all, call } from 'redux-saga/effects'
import FetchProductData from '../../api/FetchData';

import { loadDataToStore } from './index'

export  function* fetchDataAsync() {
    
    try {
        const data = yield call(FetchProductData);
        console.log('da', data);
        yield put(loadDataToStore(data))

    } catch (e) {
        console.log(e)
    }
    }


export function* shopSagas() {
    
    yield (all([call(fetchDataAsync)]))
}