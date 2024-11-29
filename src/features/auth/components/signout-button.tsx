'use client'

import { signoutActions } from "@/features/auth/actions/signout-actions"
import { Button } from "@mui/material"

export const SignoutButton = () => {
  return (
    <Button variant="text" color="error" onClick={signoutActions}>
      Sign out
    </Button>
  )
}