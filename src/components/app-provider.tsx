'use client'

import { AuthProvider } from "@/features/auth/context/auth-provider"
import { StoreProvider } from "@/store/store-provider"
import { themeConfig } from "@/theme/theme-config"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { FC, PropsWithChildren } from "react"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline enableColorScheme/>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}
