import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAikF1o8U2qXOBiWQDl6MCaLcBjanDoqlM",
    authDomain: "myphysical.firebaseapp.com",
    databaseURL: "https://myphysical.firebaseio.com",
    projectId: "myphysical",
    storageBucket: "myphysical.appspot.com",
    messagingSenderId: "782813389834",
    appId: "1:782813389834:web:e9a98224aedd1d4df86bf3",
    measurementId: "G-61C023VLZ1"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();