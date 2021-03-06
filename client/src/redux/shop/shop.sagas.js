import { takeLatest, call, put, all } from "redux-saga/effects";
import { collection, getFirestore, getDocs } from "firebase/firestore";

import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
import { convertCollectionsSnapshoptToMap } from "../../firebase/firebase.firestore";

function* fetchCollectionsAsync() {
  try {
    const db = getFirestore();
    const collectionsRef = collection(db, "collections");
    const snapshot = yield getDocs(collectionsRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshoptToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
