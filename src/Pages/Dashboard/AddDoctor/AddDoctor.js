import { Alert, Button, CircularProgress, Container, Grid, Input, TextField, Typography, ListItemText, List, ListItem, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';

const AddDoctor = () => {
    const { isLoading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [doctors, setDoctors] = useState([]);

    const handleAddDoctor = e => {
        e.preventDefault();

        if (!image) {
            setError('Upload a Picture!');
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://warm-cove-06931.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully!')
                }
            })
            .catch(error => {
                setError("Image can't upload right now!", error)
            });
    }

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    const handleDelete = id => {
        const url = `https://warm-cove-06931.herokuapp.com/doctors/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confirm = window.confirm('Are you sure? You wanna delete Doctor entry from the list.')

                if (confirm === true) {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = doctors.filter(doctor => doctor._id !== id);
                        setDoctors(remaining)
                    }
                }
                else {
                    window.location.reload();
                }
            })
    }

    return (
        <Box>
            <Container>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={12} sm={10} md={4} sx={{ mx: 'auto' }}>
                        <Box sx={{ padding: '30px 0', textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>Add Doctor</Typography>

                            {!isLoading && <form onSubmit={handleAddDoctor}>
                                <TextField
                                    label="Enter Name"
                                    type="text"
                                    variant="standard"
                                    onChange={e => setName(e.target.value)}
                                    required
                                    sx={{ width: '100%', mb: 2 }}
                                /><br />
                                <TextField
                                    label="Enter Email"
                                    type="email"
                                    variant="standard"
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    sx={{ width: '100%', mb: 4 }}
                                /><br />
                                <label htmlFor="icon-button-file">
                                    <Input
                                        accept="image/*"
                                        type="file"
                                        onChange={e => setImage(e.target.files[0])}
                                        sx={{ width: '100%', mb: 2 }}
                                    />
                                </label><br />
                                <Button variant="contained" sx={{ mt: 3 }} type="submit" disabled={!image || success}>Add Doctor</Button>
                            </form>}
                            {isLoading && <CircularProgress />}
                            {success && <Alert severity="success" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}>Doctor Added Successfully! <Link to="/home#doctors">Doctors</Link></Alert>}
                            {error && <Alert severity="error" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}></Alert>}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ px: 3 }}>
                        <Typography sx={{ mt: 4, mb: 2, textAlign: 'center', fontWeight: 'bold' }} variant="h5" component="div">
                            Our Doctors
                        </Typography>
                        <List>
                            {doctors.map(doctor => (
                                <ListItem disablePadding>
                                    <span style={{ marginRight: 10, fontWeight: 'bold' }}>•</span>
                                    <ListItemText primary={doctor.name} />
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(doctor._id)} sx={{ color: 'red' }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AddDoctor;