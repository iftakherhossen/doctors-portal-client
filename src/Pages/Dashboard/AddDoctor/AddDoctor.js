import { Alert, Button, CircularProgress, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddDoctor = () => {
    const { user, isLoading, authError } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleAddDoctor = e => {
        e.preventDefault();

        if (!image) {
            setError('Upload a Picture!');
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
            })
            .catch(error => {
                setError("Image can't upload right now!")
            });
    }

return (
    <Box>
        <Container>
            <Grid item xs={10} sm={8} md={4} sx={{ mx: 'auto' }}>
                <Box sx={{ padding: '30px 0', textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ mb: 3 }}>Add Doctor</Typography>

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
                            sx={{ width: '100%', mb: 2 }}
                        /><br />
                        <label htmlFor="icon-button-file">
                            <Input
                                accept="image/*" type="file"
                                onChange={e => setImage(e.target.files)}
                            />
                        </label><br />
                        <Button variant="contained" sx={{ mt: 5 }} type="submit">Add Doctor</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}>Doctor Added Successfully!</Alert>}
                    {authError && <Alert severity="error" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}></Alert>}
                </Box>
            </Grid>
        </Container>
    </Box>
);
};

export default AddDoctor;