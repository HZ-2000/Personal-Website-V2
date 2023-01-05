import React from 'react';
import { Typography } from '@mui/material';

export const Home: React.FC = () => {
    document.title = 'ZH | Home';
    
    return(
        <div>
            <Typography variant='h1'>Home</Typography>
        </div>
    )
}
