import React, { useState, useEffect } from 'react';
import { Alert, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {
    const [bookings, setBookings] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/availableAppointments')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    return (
        <div>
            <Typography variant="h4" sx={{ color: '#374d61', textAlign: 'center' }}>Available Appointment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success" sx={{width: '40%', mx: 'auto', mt: 2, fontWeight: 'bold'}}>Your Appointment is under processing, We will call you to reconfirm it!</Alert>}

            <Grid container spacing={3} sx={{py: 3, width: '100%', ml: 0, mt: 0 }}>
                {
                    bookings.map(booking => <Booking
                        key={booking._id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </div>
    );
};

export default AvailableAppointment;