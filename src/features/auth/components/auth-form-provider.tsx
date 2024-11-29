'use client'

import { ROUTES } from "@/constants"
import { signInWithGoogle } from "@/libs/firebase/auth"
import { Box, Button, Stack, Typography } from "@mui/material"
import { redirect } from "next/navigation"
import { FC, PropsWithChildren } from "react"

export const AuthFormProvider: FC<PropsWithChildren> = ({ children }) => {
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle()
    redirect(ROUTES.DASHBOARD)
  }
  
  return (
    <Box>
      <Stack flexDirection="row" gap={2} paddingBottom={3}>
        <Button 
          sx={{ flex: 1 }}
          variant="outlined"
          onClick={handleSignInWithGoogle}
        >
          Google
        </Button>
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap={2} marginBottom={3}>
        <Box height="1px" flex={1} sx={{ backgroundColor: ({ palette }) => palette.divider }} borderRadius={1} />
        <Typography fontWeight={300} fontSize="14px">
          or continue with email
        </Typography>
        <Box height="1px" flex={1} sx={{ backgroundColor: ({ palette }) => palette.divider }} borderRadius={1} />
      </Stack>
      {children}
    </Box>
  )
}