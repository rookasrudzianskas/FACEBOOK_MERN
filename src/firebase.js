import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdOERK03Yx2kqJ8vNr82-vNrqHSKY9eJI",
    authDomain: "rookas-facebook-app-mern.firebaseapp.com",
    projectId: "rookas-facebook-app-mern",
    storageBucket: "rookas-facebook-app-mern.appspot.com",
    messagingSenderId: "511847632816",
    appId: "1:511847632816:web:5f51fe59cbcd53a785d075",
    measurementId: "G-P9S2VF5TZQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db
