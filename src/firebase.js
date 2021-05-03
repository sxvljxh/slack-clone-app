import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeucWPuiaXnUz-d-cEB37L8Jgoh40kp2c",
    authDomain: "slack-clone-53479.firebaseapp.com",
    projectId: "slack-clone-53479",
    storageBucket: "slack-clone-53479.appspot.com",
    messagingSenderId: "793911546933",
    appId: "1:793911546933:web:cf75388ae481c292a44d7c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;