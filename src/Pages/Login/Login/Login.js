import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleLogin} style={{ padding: '110px 0', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 3 }}>Login</Typography>
                        <TextField
                            id="standard-basic" label="Enter Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                            sx={{ width: '50%', mb: 2 }} /><br />
                        <TextField
                            id="standard-basic" type="password"
                            label="Enter Your Password" variant="standard"
                            name="password"
                            onBlur={handleOnChange}
                            sx={{ width: '50%', mb: 1 }} /><br />
                        <Typography variant="body-1" sx={{ color: 'red', mr: 15.5 }}>Forget Your Password?</Typography>
                        <br />
                        <Button variant="contained" sx={{ mt: 7 }} type="submit">Login</Button>
                        <NavLink to="/register" style={{ textDecoration: 'none' }}><Typography sx={{ mt: 2 }}>New User? Register Now</Typography></NavLink>
                        <Button variant="contained" sx={{ mt: 3 }} onClick={handleGoogleSignIn}>Login With Google</Button>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Welcome, User</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/jhrKVgX/login.png" alt="login" style={{ width: '94.5%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;