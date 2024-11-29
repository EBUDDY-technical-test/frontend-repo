'use client'

import { SignoutButton } from "@/features/auth/components/signout-button";
import { Avatar, Container, Menu, Stack, Toolbar, Typography } from "@mui/material";
import { useAuth } from "@/features/auth/context/auth-provider";
import { UserGrid } from "@/features/user/components/user-grid";
import { AccountPopup } from "@/features/auth/components/mobile-account-popup";

export default function Page() {
  const { account } = useAuth()
  
  return (
    <Container>
      <Stack justifyContent="space-between" mb={5}>
        {/* Desktop & Tablet */}
        <Toolbar 
          sx={{ 
            justifyContent: 'flex-end',
            display: {
              xs: 'none',
              sm: 'flex',
            }
          }}
        >
          <SignoutButton />
        </Toolbar>
        {/* Mobile */}
        <Toolbar 
          sx={{ 
            justifyContent: 'flex-end',
            display: {
              xs: 'flex',
              sm: 'none',
            },
          }}
        >
          <AccountPopup />
        </Toolbar>
      </Stack>
      <UserGrid />
    </Container>
  )
};
