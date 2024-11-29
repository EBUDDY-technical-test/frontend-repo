'use client'

import { ErrorMessage } from "@/components"
import { BuddyTextField } from "@/components/inputs/buddy-textfield"
import { ROUTES } from "@/constants"
import { signupWithEmailAndPasswordActions } from "@/features/auth/actions/signup-with-email-and-password-actions"
import { Box, Stack } from "@mui/material"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"
import { LoadingButton } from '@mui/lab'
import { useFormStatus } from "react-dom"

const initialState = {
  success: false,
  errors: '',
}

export const SignupForm = () => {
  const [{ errors, success }, formAction] = useActionState(signupWithEmailAndPasswordActions, initialState)
  const { pending } = useFormStatus()
  
  useEffect(() => {
    if (!success) return;
    redirect(ROUTES.DASHBOARD)
  }, [success, redirect])
  
  return (
    <Box>
      <Stack gap={2} component="form" action={formAction}>
        <BuddyTextField placeholder="Email" name="email" />
        <BuddyTextField placeholder="Password" name="password" type="password" />
        {errors && <ErrorMessage errors={errors} />}
        <LoadingButton 
          loading={pending}
          variant="contained" 
          type="submit"
        >
          Sign up
        </LoadingButton>
      </Stack>
    </Box>
  )
}