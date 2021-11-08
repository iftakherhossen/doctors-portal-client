import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const appointmentBg = {
    background: 'url("https://i.ibb.co/MD0Xb6W/bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 410
}

const AppointmentHeader = ({date, setDate}) => {
    return (
        <div style={{padding: '80px 0 0 0'}}>
            <Container>
                <Grid container spacing={2} style={appointmentBg}>
                    <Grid xs={12} md={6} sx={{ pr: 10}}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img src="https://i.ibb.co/xsXWckW/chair.png" alt="chair" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;