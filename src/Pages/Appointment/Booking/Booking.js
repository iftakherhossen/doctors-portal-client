import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);

    return (
        <div>
            <Grid item xs={12} sm={6} md={4} sx={{ mx : 'auto' }}>
                <Paper elevation={3} sx={{ py: 3, m: 3, width: 320, textAlign: 'center' }}>
                    <Typography sx={{ color: '#13c2bc', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom sx={{fontWeight: 'bold'}}>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button sx={{bgcolor: '#13c2bc', color: 'black', fontWeight: 'bold', mt: 2 }} onClick={handleBookingOpen} >BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                open={open}
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </div>
    );
};

export default Booking;