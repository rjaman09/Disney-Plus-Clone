import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyASVq7zgK51oaJDoIprH8hCh83_FbN95IU",
    authDomain: "disneyplus-27308.firebaseapp.com",
    projectId: "disneyplus-27308",
    storageBucket: "disneyplus-27308.appspot.com",
    messagingSenderId: "582655857571",
    appId: "1:582655857571:web:66b530fa30a839eea70016",
    measurementId: "G-04KCKX9ZGW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;