import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

const appointmentBg = {
    background: 'url("https://i.ibb.co/Prj41tV/appointment-bg.png")',
    backgroundColor: '#374d61a2',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 100,
    marginBottom: 100,
    height: 340,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'flex-end',}}>
                    <img src="https://i.ibb.co/7J8cMxk/doctor.png" alt="Doctor" style={{ width: 440, marginTop: -116 }} />
                </Grid>
                <Grid item xs={12} md={7} sx={{display: 'flex', justifyContent: 'flex-start', my: 'auto', textAlign: 'left', paddingRight: 15 }}>
                    <Box>
                        <Typography variant="h6" sx={{mt: -4,color: '#15D1CD', fontWeight: 'bold'}}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" sx={{ my: 3, color: 'white' }}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="body-2" sx={{ mb: 3, color: 'white', display: 'block' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </Typography>
                        <Link to="/appointment" style={{textDecoration: 'none'}}><Button variant="contained" sx={{mt:2, backgroundColor: '#15D1CD' }}>Learn More</Button></Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;