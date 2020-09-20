import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

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
const fb = firebase.initializeApp(firebaseConfig);

//
const db = firebase.firestore()
const auth = firebase.auth()
const dbProductAdd = db.collection('products');
const usersCollection = db.collection('users')

export {
 fb, 
 db,
 auth,
 dbProductAdd,
 usersCollection
}
