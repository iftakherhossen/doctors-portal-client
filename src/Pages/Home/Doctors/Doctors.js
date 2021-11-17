import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    
    return (
        <Box>
            <Typography variant="h4">Our Doctors</Typography>
        </Box>
    );
};

export default Doctors;