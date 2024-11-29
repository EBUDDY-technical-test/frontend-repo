import { ROUTES } from "@/constants";
import { SignupForm } from "@/features/auth/components/signup-form";
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
            Create your account
          </Typography>
          <SignupForm />
          <Typography
            mt={2}
            textAlign="center"
            fontSize="14px"
            fontWeight={300}
          >
            Already have an account?
            <Link 
              component={NextLink} 
              href={ROUTES.SIGN_IN}
              ml={1}
              fontWeight={400}
            >
              Sign in
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  )
}