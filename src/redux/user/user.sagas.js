import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { takeLatest, put, all, call } from "redux-saga/effects";

import { createUserProfileDocument } from "../../firebase/firebase.firestore";
import {
  emailSignInFailure,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
} from "./user.actions";

import UserActionTypes from "./user.types";

function* signInWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const { user } = yield signInWithPopup(auth, provider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield getDoc(userRef);
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure, error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  const auth = getAuth();
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield getDoc(userRef);
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
