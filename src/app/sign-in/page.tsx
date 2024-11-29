import { ROUTES } from "@/constants";
import { SigninForm } from "@/features/auth/components/signin-form";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import NextLink from 'next/link';

export default function SigninPage() {
  return (
    <Container>
      <Stack
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ maxWidth: '350px', width: '100%' }}>
          <Typography 
            fontWeight={600} 
            fontSize={28}
            marginBottom={3}
            textAlign="center"
          >
            Sign in to your account
          </Typography>
          <SigninForm />
          <Typography
            mt={2}
            textAlign="center"
            fontSize="14px"
            fontWeight={300}
          >
            Don't have an account?
            <Link
              component={NextLink}
              href={ROUTES.SIGN_UP}
              ml={1}
              fontWeight={400}
            >
              Create account
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  )
}