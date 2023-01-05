import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { ABar } from '../';


const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <ABar theme={theme} setTheme={setTheme} />

                {/* render content of page */}
                
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </Box>
        </ThemeProvider>
    );
}
