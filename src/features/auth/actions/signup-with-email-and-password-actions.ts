'use server'

import { signupSchema } from "@/features/auth/schema/signup-schema"
import { signUpWithEmailAndPassword } from "@/libs/firebase/auth"
import { createSession } from "@/features/auth/helper/session"
import { FirebaseError } from "firebase/app"
import { ValidationError } from "yup"

export async function signupWithEmailAndPasswordActions(_: unknown, formData: FormData) {
  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  try {
    const validData = await signupSchema.validate(data, { abortEarly: false })
    const result = await signUpWithEmailAndPassword(validData)

    const token = await result.user.getIdToken(true)
    
    await createSession(token)

    return {
      success: true,
      message: 'Sign up success!'
    };
  } catch (error) {
    let errors: string | string[] = 'An unexpected error occurred';

    if (error instanceof FirebaseError) {
      if (error.code === 'auth/email-already-in-use') {
        if ((error.customData?._tokenResponse as any)?.error?.message === 'EMAIL_EXISTS') {
          errors = 'Email already exists! use another email'
        }
      }
      
      return {
        success: false,
        errors,
      };
    }
    if (error instanceof ValidationError) {
      errors = error.errors
      
      return {
        success: false,
        errors: error.errors,
      }
    }
    
    return {
      success: false,
      errors
    };
  }
}
