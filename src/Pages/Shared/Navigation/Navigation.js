import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: '#374d61' }}>
                <Toolbar sx={{ mx: 5 }}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}> Doctor's Portal</Link>
                    </Typography>
                    <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
                        <Link to="/home" className="navBtn">
                            <Typography>Home</Typography>
                        </Link>
                        <Link to="/appointment" className="navBtn">
                            <Typography>Appointment</Typography>
                        </Link>
                        {
                            user?.email ? <Link to="/dashboard" className="navBtn">
                                    <Typography>Dashboard</Typography>
                                </Link>   :
                            <Typography>
                                    
                            </Typography>
                        }
                    </Box>
                    {
                        user?.email ?
                            <Button variant="outlined" sx={{ marginLeft: 8, fontSize: 16, color: 'white', borderColor: 'white' }} onClick={logOut}>Log Out</Button>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button variant="outlined" sx={{ marginLeft: 8, fontSize: 16, color: 'white', borderColor: 'white' }}>Login</Button>
                            </NavLink>        
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;