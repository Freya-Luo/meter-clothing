import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBIhMr3D2FueJE7Ol66vWgcgvTha1VUdSw',
    authDomain: 'ini-clothing-db.firebaseapp.com',
    projectId: 'ini-clothing-db',
    storageBucket: 'ini-clothing-db.appspot.com',
    messagingSenderId: '978373102508',
    appId: '1:978373102508:web:91de1b4f2f67a7cb820809',
    measurementId: 'G-VKYGDSH4Z6',
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account',
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
