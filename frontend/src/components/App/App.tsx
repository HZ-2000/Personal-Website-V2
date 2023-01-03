import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ABar } from '../';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: '#718792',
            main: '#455a64',
            dark: '#1c313a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#87ffff',
            main: '#4ccfe0',
            dark: '#009eae',
            contrastText: '#000',
        },
    },
});


export const App: React.FC = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <ABar />
                <Box>
                    <Outlet />
                </Box>
            </ThemeProvider>
        </React.Fragment>
    )
}
