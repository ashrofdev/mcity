import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyDOWo8_KuroKCEBhd3ML10nD3oz-dut3DQ",
  authDomain: "whatsup-14377.firebaseapp.com",
  databaseURL: "https://whatsup-14377.firebaseio.com",
  projectId: "whatsup-14377",
  storageBucket: "whatsup-14377.appspot.com",
  messagingSenderId: "111274175387",
  appId: "1:111274175387:web:7ed47a3d27fc8ccd250f3e",
  measurementId: "G-NFYB0TRB36"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}