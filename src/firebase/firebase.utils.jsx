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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;