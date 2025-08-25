'use client'

import * as React from 'react'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    // neutral, classy accents (no blue)
    primary: { main: '#e5e7eb' }, // light gray accent
    background: {
      default: '#000000',      // page background
      paper: 'rgba(255,255,255,0.04)', // card backgrounds
    },
    text: {
      primary: '#e5e5e5',
      secondary: '#9ca3af',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 12 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { backgroundColor: '#111827', color: '#e5e7eb' },
      },
    },
  },
})

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
