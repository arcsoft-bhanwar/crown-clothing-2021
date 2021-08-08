import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA3o1DI5JnYmI6UiTKr6Uywu0VociZaEGo",
    authDomain: "crwn-db-23331.firebaseapp.com",
    projectId: "crwn-db-23331",
    storageBucket: "crwn-db-23331.appspot.com",
    messagingSenderId: "690904785102",
    appId: "1:690904785102:web:9f4bf7af403355c771f09f",
    measurementId: "G-CZWS0C1NL2"
  };



export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  //console.log('bbbbbbb',firestore.doc(`users/${userAuth.uid}`))
  //console.log('bbbbbbb',firestore.doc('users/reterterter656565'))
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //console.log('aaaaaaaa',userRef)
  const snapShot = await userRef.get();
  //console.log('bbbbbbb',snapShot)
  if(!snapShot.exists){
    const{displayName, email} = userAuth;
    const createdAt = new Date();

    try{

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      })
    }
    catch(error){
      console.log('error creating user', error.message)

    }

  }

  return userRef;

 
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export default firebase;