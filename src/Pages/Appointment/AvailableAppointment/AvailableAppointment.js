import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('/availableAppointments.json')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    return (
        <div>
            <Typography variant="h4" sx={{ color: '#374d61', textAlign: 'center' }}>Available Appointment on {date.toDateString()}</Typography>

            <Grid container spacing={3} sx={{py: 3, width: '100%', ml: 0, mt: 0 }}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >
                    </Booking>)
                }
            </Grid>
        </div>
    );
};

export default AvailableAppointment;