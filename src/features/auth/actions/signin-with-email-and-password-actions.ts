'use server'

import { signinSchema } from "@/features/auth/schema/signin-schema"
import { signInWithEmailAndPassword } from "@/libs/firebase/auth"
import { FirebaseError } from "firebase/app"
import { ValidationError } from "yup"
import { createSession } from "@/features/auth/helper/session"

export async function signinWithEmailAndPasswordActions(_: unknown, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  try {
    const validData = await signinSchema.validate(data, { abortEarly: false })
    const result = await signInWithEmailAndPassword(validData)

    const token = await result.user.getIdToken(true)

    await createSession(token)
    
    return {
      success: true,
      message: 'Message sent successfully!',
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
