import React from 'react'
import { Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import Sidedrawer from './Sidedrawer';


const Header = () => {
    return (
        <>
            <Toolbar>
                <Sidedrawer>
                    <IconButton color='inherit'>
                        <MenuIcon />
                    </IconButton>
                </Sidedrawer>
                <Typography variant='h6' sx={{
                    flexGrow: 1
                }}>
                    Blogging Website
                </Typography>
                <IconButton color='inherit'>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Toolbar sx={{
                fontSize: 20,
                textTransform: 'uppercase',
                justifyContent: 'center',
                fontFamily: 'Montserrat',
            }} >
                Express your emotions through words.
            </Toolbar>
        </>
    )
}

export default Header
