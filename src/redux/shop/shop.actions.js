import ShopActionTypes from "./shop.types";
import { collection, getFirestore, getDocs } from "firebase/firestore";

import { convertCollectionsSnapshoptToMap } from "../../firebase/firebase.firestore";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const db = getFirestore();
    const collectionsRef = collection(db, "collections");
    dispatch(fetchCollectionsStart());

    getDocs(collectionsRef)
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshoptToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
