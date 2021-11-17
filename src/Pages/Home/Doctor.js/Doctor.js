import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Doctor = ({ doctors }) => {
    const { name, image, email } = doctors;

    return (
        <Box sx={{ width: '100%' }}>
            <Container>
                <Box sx={{ width: '100%', textAlign: 'center', m: 'auto' }}>
                    <img src={`data:image/pmg;base64,${image}`} alt="Doctor Avatar" className="doctorImg" />
                    <Typography variant="h6" sx={{ fontWeight: 'bold'}}>{name}</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}><a href={`${email}`} style={{ textDecoration: 'none', color: '#418FCE' }}>Send Email</a></Typography>
                </Box>
            </Container>
        </Box >
    );
};

export default Doctor;