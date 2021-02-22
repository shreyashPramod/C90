import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDmCxPBFS7T_mr0orOZYESQOkcG_4_lL2o",
    authDomain: "horizontal-hurdles-7df61.firebaseapp.com",
    databaseURL: "https://horizontal-hurdles-7df61.firebaseio.com",
    projectId: "horizontal-hurdles-7df61",
    storageBucket: "horizontal-hurdles-7df61.appspot.com",
    messagingSenderId: "381367585732",
    appId: "1:381367585732:web:cdbd2108a9e1a2f0cbf291"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();