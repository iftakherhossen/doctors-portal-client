import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Box, Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    px: 8,
    textAlign: 'center'
};

const BookingModal = ({ open, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, fees } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            time,
            fees,
            date: date.toLocaleDateString()
        }

        // send data to the server
        fetch('https://warm-cove-06931.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });

        e.preventDefault();
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <TextField
                            disabled
                            id="standard-size-normal"
                            defaultValue={time}
                            variant="standard"
                            sx={{ my: 2, width: '100%' }}
                        />
                        <TextField
                            id="standard-size-normal"
                            defaultValue={user.displayName}
                            variant="standard"
                            name="patientName"
                            onBlur={handleOnBlur}
                            sx={{ my: 2, width: '100%' }}
                        />
                        <TextField
                            id="standard-size-normal"
                            defaultValue={user.email}
                            variant="standard"
                            name="email"
                            onBlur={handleOnBlur}
                            sx={{ my: 2, width: '100%' }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'between' }}>
                            <TextField
                                id="standard-size-normal"
                                defaultValue="+88"
                                variant="standard"
                                name="phone"
                                title="Phone Number"
                                onBlur={handleOnBlur}
                                sx={{ my: 2, width: '70%' }}
                                required
                            />
                            <TextField
                                id="standard-size-normal"
                                defaultValue={fees}
                                variant="standard"
                                name="fees"
                                title="Fees"
                                onBlur={handleOnBlur}
                                sx={{ my: 2, width: '25%', pl: 2 }}
                                disabled
                            />
                        </Box>
                        <TextField
                            disabled
                            id="standard-size-normal"
                            defaultValue={date.toDateString()}
                            variant="standard"
                            sx={{ my: 2, width: '100%' }}
                        />
                        <Button variant="contained" sx={{ bgcolor: '#13c2bc', color: 'black', fontWeight: 'bold' }} onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;