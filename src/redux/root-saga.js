// import { all, call } from 'redux-saga/effects';
import { call, all } from '@redux-saga/core/effects';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { shopSaga } from './shop/shop.sagas';

export default function* rooSaga() {
  yield all([
    call(userSagas),
    call(cartSagas),
    call(shopSaga)
  ])
}