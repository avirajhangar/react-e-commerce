import ShopActionTypes from "./shop.types";
// import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
}) 

export const fetchCollectionsSuccess = collectionsMapped => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMapped
})

export const fetchCollectionsFailure = error => ({
  type: ShopActionTypes.fetchCollectionsFailure,
  payload: error
})

// export const fetchCollectionStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionStart());

//     collectionRef.get().then(
//       snapshop => {
//         const collectionsMapped = convertCollectionsSnapshotToMap(snapshop);
//         dispatch(fetchCollectionsSuccess(collectionsMapped));
//        }
//     ).catch(error => dispatch(fetchCollectionsFailure(error)))
//   }
// }