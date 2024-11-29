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
            justifyContent: 'space-between',
            display: {
              xs: 'none',
              sm: 'flex',
            }
          }}
        >
          <Stack 
            flexDirection="row" 
            alignItems="center"
            gap={2}
          >
            <Avatar src={account?.avatar ?? undefined} />
            <Stack>
              <Typography fontSize={14} fontWeight={500}>{account?.name}</Typography>
              <Typography fontSize={12}>{account?.email}</Typography>
            </Stack>
          </Stack>
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
