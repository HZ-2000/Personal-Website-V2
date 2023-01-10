import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { ABar } from '../';


const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#E9E5E3"
        },
        background: {
            default: "#E9E5E3",
            paper: "#8FA39E"
        }
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#748E81"
        },
        background: {
            default: "#748E81",
            paper: "#274442"
        }
    },
});


export function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Box sx={{ 
                flexGrow: 1, 
                backgroundImage: theme === "light" ? 
                    'linear-gradient(132deg, #E9E5E3 0.00%, #8FA39E 100.00%)':
                    'linear-gradient(132deg, #748E81 0.00%, #274442 100.00%)',
                minHeight: "100vh"
            }}>
                <ABar theme={theme} setTheme={setTheme} />
                <Outlet />
            </Box>
        </ThemeProvider>
    );
}
