import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import { userActionTypes } from "./user.types";

import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";

import { signInSuccess, signInFailure} from './user.actions';

export function* signInWithGoogle() {
  try{
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot }))
  } catch(error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail({payload: { email, password }}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot }))
  } catch(error) {
    yield put(signInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}