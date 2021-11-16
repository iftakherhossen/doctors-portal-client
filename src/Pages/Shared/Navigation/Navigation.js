import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: '#374d61' }}>
                <Toolbar sx={{ ml: 5 }}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}> Doctor's Portal</Link>
                    </Typography>
                    <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
                        <Link to="/home" className="navBtn">
                            <Typography sx={{ fontSize: 18 }}>Home</Typography>
                        </Link>
                        <Link to="/appointment" className="navBtn">
                            <Typography sx={{ fontSize: 18, mx: 1 }}>Appointment</Typography>
                        </Link>
                        {
                            user?.email && <Link to="/dashboard" className="navBtn">
                                <Typography sx={{ fontSize: 18 }}>Dashboard</Typography>
                            </Link>
                        }
                    </Box>
                    <Box sx={{ ml: 4, mr: 2 }}>
                        {
                            user?.photoURL ? <img src={user?.photoURL} alt={user.displayName} title={user?.displayName} className="nav-avatar" /> : <AccountCircleIcon sx={{ fontSize: 40 }} title={user?.displayName} />
                        }
                    </Box>
                    {
                        user?.email ?
                            <Button variant="inherit" sx={{ fontSize: 16, color: 'white', mr: 5 }} onClick={logOut}><LogoutIcon sx={{ fontSize: 35 }} /></Button>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button variant="inherit" sx={{ fontSize: 16, color: 'white', mr: 5 }}>Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;