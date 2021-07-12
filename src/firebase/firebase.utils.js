import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmXjIpwiR-8chbKdXMs1bd52XCOhbdlsI",
    authDomain: "clothing-d67be.firebaseapp.com",
    projectId: "clothing-d67be",
    storageBucket: "clothing-d67be.appspot.com",
    messagingSenderId: "151960995780",
    appId: "1:151960995780:web:4b5a75feeb573e13954691",
    measurementId: "G-7GCRFL9PBK"
  };

  export const createUserProfileDocument=async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch(error) {
            console.log('error in creating the user', error.message)
        }
    }

    return userRef;
     
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
