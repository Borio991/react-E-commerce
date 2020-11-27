import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC68IKVMaA4JekG9v0NqPQfuotEx6Av9dI",
    authDomain: "crwn-dp-22dc8.firebaseapp.com",
    databaseURL: "https://crwn-dp-22dc8.firebaseio.com",
    projectId: "crwn-dp-22dc8",
    storageBucket: "crwn-dp-22dc8.appspot.com",
    messagingSenderId: "525182265138",
    appId: "1:525182265138:web:be643eade8333fe916d92b",
    measurementId: "G-94LD61JY6H"
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

