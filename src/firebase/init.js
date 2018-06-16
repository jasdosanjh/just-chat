import firebase from 'firebase'
import firestore from 'firebase/firestore'

//  Initialize Firebase
var config = {
    apiKey: "AIzaSyC1FH_pBQmhcEFDxu3ezJgMaWypSOy7laE",
    authDomain: "just-chat-6aa8d.firebaseapp.com",
    databaseURL: "https://just-chat-6aa8d.firebaseio.com",
    projectId: "just-chat-6aa8d",
    storageBucket: "just-chat-6aa8d.appspot.com",
    messagingSenderId: "603539882453"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore();