'use client'

import { ErrorMessage } from "@/components"
import { BuddyTextField } from "@/components/inputs/buddy-textfield"
import { ROUTES } from "@/constants"
import { signinWithEmailAndPasswordActions } from "@/features/auth/actions/signin-with-email-and-password-actions"
import { Box, Stack } from "@mui/material"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"
import { LoadingButton } from '@mui/lab'
import { useFormStatus } from "react-dom"

const initialState = {
  success: false,
  errors: '',
}

export const SigninForm = () => {
  const [{ errors, success }, formAction] = useActionState(signinWithEmailAndPasswordActions, initialState)
  const { pending } = useFormStatus()

  useEffect(() => {
    if (!success) return;
    redirect(ROUTES.DASHBOARD);
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
          Sign in
        </LoadingButton>
      </Stack>
    </Box>
  )
}