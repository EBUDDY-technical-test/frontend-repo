'use client'

import { SignoutButton } from "@/features/auth/components/signout-button";
import { Container, Stack, Toolbar } from "@mui/material";
import { UserGrid } from "@/features/user/components/user-grid";
import { AccountPopup } from "@/features/auth/components/mobile-account-popup";

export default function Page() {
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
