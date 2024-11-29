import {
  type User,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as _signOut,
  getAuth,
} from 'firebase/auth';

import { firebaseAuth } from './config';

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  return _onAuthStateChanged(firebaseAuth, callback);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(firebaseAuth, provider);

    return result;
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
}

type EmailAndPasswordData = {
  email: string;
  password: string;
}
export async function signInWithEmailAndPassword(data: EmailAndPasswordData) {
  try {
    return await _signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
  } catch (error) {
    console.error('Error signing with Email and Password');
    throw error;
  }
}
export async function signUpWithEmailAndPassword(data: EmailAndPasswordData) {
  try {
    return await createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
  } catch (error) {
    console.error('Error sign up with Email and Password');
    throw error;
  }
}

export async function signOut() {
  try {
    return await getAuth().signOut();
  } catch (error) {
    console.error('Error signing out with Google', error);
  }
}