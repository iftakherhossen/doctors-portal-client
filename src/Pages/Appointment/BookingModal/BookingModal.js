import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import {Box, Button, Typography} from '@mui/material';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const BookingModal = ({open, handleBookingClose, booking, date}) => {
    const {name, time } = booking;
    const { user } = useAuth();

    const handleSubmit = e => {
        alert('submitting!')

        // collect data 

        handleBookingClose();
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
                        sx={{my: 2, width: '100%'}}
                    />
                    <TextField
                        id="standard-size-normal"
                        defaultValue={user.displayName}
                        variant="standard"
                        sx={{my: 2, width: '100%'}}
                    />
                    <TextField
                        id="standard-size-normal"
                        defaultValue={user.email}
                        variant="standard"
                        sx={{my: 2, width: '100%'}}
                    />
                    <TextField
                        id="standard-size-normal"
                        defaultValue="Type Your Phone"
                        variant="standard"   
                        sx={{ my: 2, width: '100%' }}
                            
                    />
                    <TextField
                        disabled
                        id="standard-size-normal"
                        defaultValue={date.toDateString()}
                        variant="standard"
                        sx={{my: 2, width: '100%'}}
                    />
                    <Button variant="contained" sx={{bgcolor: '#13c2bc', color: 'black', fontWeight: 'bold'}} onClick={handleSubmit}>Submit</Button>
                </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;