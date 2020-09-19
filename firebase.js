import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

//Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDbmA0l3vA4Cp8roI0SXcPmp5y9uhMNEq0",
    authDomain: "endproject-pwa.firebaseapp.com",
    databaseURL: "https://endproject-pwa.firebaseio.com",
    projectId: "endproject-pwa",
    storageBucket: "endproject-pwa.appspot.com",
    messagingSenderId: "612313413641",
    appId: "1:612313413641:web:7870198cb0df984b7620d8"
  };

  // Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore()
  export const dbProductAdd = db.collection('products')