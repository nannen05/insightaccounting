import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyC1ksIaRKnHUux9Z9OwUE7omKWTQvQDBII",
    authDomain: "insight-accounting.firebaseapp.com",
    databaseURL: "https://insight-accounting.firebaseio.com",
    projectId: "insight-accounting",
    storageBucket: "insight-accounting.appspot.com",
    messagingSenderId: "381354440372"
  };

const FIREBASE_APP = firebase.initializeApp(config);

const FIREBASE_DATABASE = FIREBASE_APP.database()

export const DATAREFNAV = FIREBASE_DATABASE.ref('flamelink/environments/production/navigation/mainMenu')

export const DATAREFHERO = FIREBASE_DATABASE.ref('/flamelink/environments/production/content/hero/en-US')

export const DATAREFSERVICES = FIREBASE_DATABASE.ref('/flamelink/environments/production/content/services/en-US')

export const DATAREFTEAM = FIREBASE_DATABASE.ref('/flamelink/environments/production/content/team/en-US')

export const DATAREFABOUT = FIREBASE_DATABASE.ref('/flamelink/environments/production/content/about/en-US')
