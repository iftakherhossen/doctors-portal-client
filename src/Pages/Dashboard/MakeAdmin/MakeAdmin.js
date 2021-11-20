import { Alert, Button, TextField, Typography, Container, Grid, TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const [admin, setAdmin] = useState([]);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdmin = e => {
        const user = { email };

        fetch('https://warm-cove-06931.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .the(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });

        e.preventDefault(user)
    }

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])

    return (
        <Box style={{ textAlign: 'center'}}>
            <Container>
                <Box>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item xs={12} sm={12} md={5} sx={{mt: 2}}>
                            <Typography variant="h4" sx={{ pt: 4 }}>Make an Admin</Typography>
                            <Box>
                                <form onSubmit={handleAdmin}>
                                    <TextField
                                        id="standard-basic-email" label="Enter Your Email"
                                        type="email"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        variant="standard"
                                        sx={{ width: '100%', my: 4 }} /><br />
                                    <Button type="submit" variant="contained" sx={{ bgcolor: '#13C2BC', fontWeight: 'bold' }}>Make Admin</Button>
                                    {success && <Alert severity="success" sx={{ mt: 3, width: '50%', mx: 'auto', fontWeight: 'bold' }}>Made Admin successfully!</Alert>}
                                </form>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} sx={{ mt: 5 }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ width: '100%' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{display: 'flex', alignItems: 'center'}}>
                                                <AdminPanelSettingsIcon sx={{ fontSize: 40 }} />
                                                <Typography variant="h5"> &nbsp; Admin's</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {admin.map((admin) => (
                                            <TableRow
                                                key={admin._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                {admin.role && <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', my :'auto' }}>
                                                    <AccountCircleIcon sx={{fontSize: 30}} /> &nbsp; &nbsp;
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{admin.displayName}</Typography>
                                                </TableCell>}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default MakeAdmin;