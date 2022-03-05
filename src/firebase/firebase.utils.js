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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){return;}

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
