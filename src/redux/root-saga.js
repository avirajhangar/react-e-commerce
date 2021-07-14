// import { all, call } from 'redux-saga/effects';
import { call, all } from '@redux-saga/core/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rooSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas)
  ])
}