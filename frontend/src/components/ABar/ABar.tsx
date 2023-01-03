import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Switch
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const ABar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        (insert home icon here)
                    </Typography>
                    <Typography>
                        <Switch color="secondary" />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
