'use client'

import React, { useState } from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/material';
import ABar from '../components/ABar/ABar';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#E9E5E3"
        },
        background: {
            default: "#E9E5E3",
            paper: "#1CA9C9"
        }
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#1CA9C9"
        },
        background: {
            default: "#1CA9C9",
            paper: "#000000"
        }
    },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("dark");

  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Box sx={{ 
                flexGrow: 1, 
                backgroundImage: theme === "light" ? 
                    'linear-gradient(132deg, #E9E5E3 0.00%, #1CA9C9 100.00%)':
                    'linear-gradient(132deg, #1CA9C9 0.00%, #000000 100.00%)',
                minHeight: "100vh"
            }}>
                <ABar theme={theme} setTheme={setTheme} />
                {children}
            </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
