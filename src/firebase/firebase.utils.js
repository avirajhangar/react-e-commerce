import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBInWSzVBcT0LSWgZguziSYnyWzjMyKgU4",
  authDomain: "crown-react-76b6c.firebaseapp.com",
  projectId: "crown-react-76b6c",
  storageBucket: "crown-react-76b6c.appspot.com",
  messagingSenderId: "849050906055",
  appId: "1:849050906055:web:1d3d83d264377a12b67de2"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log(error.message);
    }
  }
  
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items: items,
      title: title
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } ,{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
  login_hint: 'user@example.com'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;