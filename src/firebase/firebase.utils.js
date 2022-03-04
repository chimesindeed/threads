import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyCsrjgzhJuN4HXsFs8bAeSeHdv0VGtH9uQ",
  authDomain: "threads-db-76f79.firebaseapp.com",
  projectId: "threads-db-76f79",
  storageBucket: "threads-db-76f79.appspot.com",
  messagingSenderId: "235698861710",
  appId: "1:235698861710:web:59d45fed339b9e5becbbdf"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
