import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, fees } = booking;
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
                    <Typography variant="body1" display="block" gutterBottom sx={{fontWeight: 'bold', mb: 1}}>
                        Fees ${fees}
                    </Typography>
                    <Button sx={{bgcolor: '#13c2bc', color: 'black', fontWeight: 'bold' }} onClick={handleBookingOpen} >BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                open={open}
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </div>
    );
};

export default Booking;