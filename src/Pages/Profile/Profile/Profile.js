import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Button, Paper, TableHead, Tooltip, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
import Navigation from '../../Shared/Navigation/Navigation';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch(`https://warm-cove-06931.herokuapp.com/appointments/${user.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [user.email])

    return (
        <Box>
            <Navigation />
            <Container>
                <Box>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ my: 6 }}>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow
                                                key={user._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell>
                                                    <img src={user.photoURL} alt="Avatar" className="profilePic" /><br />
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography variant="h5">{user.displayName}</Typography>
                                                    <Typography variant="body1">{user.email}</Typography>
                                                    <Tooltip title="Update Profile" placement="left">
                                                        <IconButton>
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <Typography variant="h5">Appointments - {appointment.length}</Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}><Button variant="container" sx={{ fontSize: 15, border: '1px solid black' }}>Check Appointments</Button></Link>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Profile;