import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', my: 2, textAlign: 'center', color: '#15D1CD' }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', my: 2, textAlign: 'center' }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {service.map((service, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Service
                                key={service.key}
                                service={service}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;