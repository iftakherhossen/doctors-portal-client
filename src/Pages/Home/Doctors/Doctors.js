import { Typography, Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor.js/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <Box>
            <Container>
                <Box id="doctors">
                    <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mt: 3, mb: 5 }}>Our Doctors</Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {doctors.map((doctor, _id) => (
                            <Grid item xs={12} sm={6} md={3} key={_id}>
                                <Doctor
                                    key={doctor.key}
                                    doctors={doctor}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Doctors;