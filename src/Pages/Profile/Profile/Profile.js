import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TableContainer, Table, TableBody, TableRow, TableCell,Button,  Paper, TableHead,Tooltip, IconButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';
import Navigation from '../../Shared/Navigation/Navigation';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

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
                                                    <img src={user.photoURL} alt="Avatar" className="profilePic" />
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
                                                    <Box sx={{width: 180, display: 'flex', justifyContent: 'space-between', mt: 2}}>
                                                        <AssignmentTurnedInIcon /><Typography variant="body1" sx={{fontWeight: 600}}>5</Typography>
                                                        &nbsp;
                                                        <PendingActionsIcon /><Typography variant="body1" sx={{ fontWeight: 600 }}>8</Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}><Button variant="container" sx={{fontWeight:'bold'}}>Check Appointments</Button></Link>
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