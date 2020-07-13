import firebase from "firebase";

// const firebaseapp =
firebase.initializeApp({
  apiKey: "AIzaSyCmgKmPDtDz9w6TM0qdhhNwGG_jnLt0g2I",
  authDomain: "intagram-clone-react.firebaseapp.com",
  databaseURL: "https://intagram-clone-react.firebaseio.com",
  projectId: "intagram-clone-react",
  storageBucket: "intagram-clone-react.appspot.com",
  messagingSenderId: "172905140476",
  appId: "1:172905140476:web:fc6f8dc1f2c2db496a8779",
  measurementId: "G-7DLPMV1W6F",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
// export default firebaseapp;
