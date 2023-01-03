import { Container, Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ABar } from '../';


export const App: React.FC = () => {
    return (
        <React.Fragment>
            <ABar />
            <Box>
                <Outlet />
            </Box>
        </React.Fragment>
    )
}
