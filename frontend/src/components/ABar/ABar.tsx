import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

// icons for ABar and nav
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import TerminalIcon from '@mui/icons-material/Terminal';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const pages = [
    {
        name: "Home",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        name: "Projects",
        icon: <TerminalIcon />,
        link: "/projects",
    },
    {
        name: "Contact",
        icon: <ContactsIcon />,
        link: "/contact",
    },
]

const drawerWidth = 440;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


interface aBarProps {
    setTheme: (args:any) => void,
    theme: string
}


export const ABar = (props: aBarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => setOpen(true)}
                            edge="start"
                            size="large"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Insert Icon
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => {
                                const theme = (props.theme === "light"? "dark": "light")
                                props.setTheme(theme);
                            }}
                            edge="start"
                            size="large"
                        >
                            {props.theme === "light"? <Brightness4Icon/>:<DarkModeIcon/>}
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(false)}>
                        <ClearIcon />
                    </IconButton>
                </DrawerHeader>
                <List>
                    {pages.map((page: any) => (
                        <Link key={page.name} to={page.link} style={{textDecoration: "none", color:"inherit"}}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => setOpen(false)}>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="h6">
                                            {page.name}
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    )
}
