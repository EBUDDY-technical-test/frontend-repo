'use server'

import { signInWithGoogle } from "@/libs/firebase/auth"
import { FirebaseError } from "firebase/app"
import { ValidationError } from "yup"
import { createSession } from "@/features/auth/helper/session"

export async function signinWithEmailAndPasswordActions(_: unknown, formData: FormData) {
  try {
    const result = await signInWithGoogle()

    if (!result) throw new Error('Google sign in failed');
    
    const token = await result.user.getIdToken(true)

    await createSession(token)
    
    return {
      success: true,
      message: 'Message sent successfully!'
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      let message = '';

      if (error.code === 'auth/invalid-credential') {
        message = 'Invalid credentials'
      }
      
      return {
        success: false,
        errors: message,
      };
    }
    if (error instanceof ValidationError) {
      return {
        success: false,
        errors: error.errors,
      }
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred'
    };
  }
}
