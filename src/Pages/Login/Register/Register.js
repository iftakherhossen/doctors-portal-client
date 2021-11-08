import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    }
    const handleRegister = e => {
        if (registrationData.password !== registrationData.retypePassword) {
            alert("Password didn't match!")
        }
        else {
            registerUser(registrationData.name, registrationData.email, registrationData.password, history);
            alert('Registration Successfully!')
        }

        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ padding: '30px 0', textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 3 }}>Register</Typography>
                        {!isLoading && <form onSubmit={handleRegister}>
                            <TextField
                                id="standard-basic" label="Enter Your Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                                sx={{ width: '50%', mb: 2 }}
                            /><br />
                            <TextField
                                id="standard-basic" label="Enter Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                                sx={{ width: '50%', mb: 2 }}
                            /><br />
                            <TextField
                                id="standard-basic" type="password"
                                label="Enter Your Password" variant="standard"
                                name="password"
                                onBlur={handleOnBlur}
                                sx={{ width: '50%', mb: 2 }}
                            /><br />
                            <TextField
                                id="standard-basic" type="password"
                                label="Retype Your Password" variant="standard"
                                name="retypePassword"
                                onBlur={handleOnBlur}
                                sx={{ width: '50%', mb: 2 }}
                            /><br />
                            <Button variant="contained" sx={{ mt: 5 }} type="submit">Register</Button>
                            <NavLink to="/login" style={{ textDecoration: 'none' }}><Typography sx={{ mt: 2 }}>Already Registered? Login Here</Typography></NavLink>
                            <Button variant="contained" sx={{ mt: 3 }} type="submit" onClick={handleGoogleSignIn}>Register With Google</Button>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success" sx={{mt: 3, width: '50%', mx: 'auto', fontWeight: 'bold'}}>User Created Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/jhrKVgX/login.png" alt="login" style={{ width: '94.5%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;