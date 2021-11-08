import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <Calender
                    sx={{ pt: 10 }}
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={8}>
                <Appointments
                    date={date}
                ></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;