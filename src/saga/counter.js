import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { SAGA_INCREMENT, incrementCount } from 'Action/counter';

function* fetchCounter(action) {
  yield new Promise(function (resolve) {
    setTimeout(function () {
        resolve()
    }, 1000)
  })
  yield put(incrementCount(action.index));
}

export function* mySaga() {
  yield* takeLatest(SAGA_INCREMENT, fetchCounter)
}