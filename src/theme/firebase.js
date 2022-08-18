import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import {useState} from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut,signInWithEmailAndPassword} from 'firebase/auth';
const app = firebase.initializeApp({
  apiKey: "AIzaSyDk4fz-XuF4KQd2xo6YjyY-nEpCRwEipzo",
  authDomain: "fir-1-79adb.firebaseapp.com",
  projectId: "fir-1-79adb",
  storageBucket: "fir-1-79adb.appspot.com"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const logout = (afterAction = () => {}) => {
  signOut(auth).then(r => afterAction(null));
};

// export const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
