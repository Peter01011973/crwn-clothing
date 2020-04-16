import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBLOvC0LtcV8GEovYfRV_WTEQeoOmXLK4o",
  authDomain: "crwn-db-7919f.firebaseapp.com",
  databaseURL: "https://crwn-db-7919f.firebaseio.com",
  projectId: "crwn-db-7919f",
  storageBucket: "crwn-db-7919f.appspot.com",
  messagingSenderId: "263666823964",
  appId: "1:263666823964:web:4c2d699fbe9db0f102c0d9",
  measurementId: "G-493V6JNGCK"
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const tranformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  })

  return tranformedCollection.reduce((object, collection) => {
    object[collection.title.toLowerCase()] = collection;
    return object
  }, {})

}

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  console.log('collectionRef', collectionRef);
  objectsToAdd.forEach(obj => {
    const newDocumentRef = collectionRef.doc();
    batch.set(newDocumentRef, obj)
  });
  return await batch.commit();
  
}

export const createUserProfileDocument = async (userAuth, additinalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const userCollectionRef = firestore.collection('users');
  // const userCollectionSnapshot = await userCollectionRef.get();
  // console.log('userCollectionSnapshot', userCollectionSnapshot.docs.map((doc, index ) => console.log(`${index+1}: `,doc.data())
  // ));
  
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({ displayName, email, createAt, ...additinalData });
    } catch (error) {
      console.log('user create error', error.message);
    }
  }
  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;