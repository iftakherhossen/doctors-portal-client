import { TextField, Typography, Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jw0QIEZbAaLA3LbnKmE0F197qvCUKQPKo5ljyMDxuChDnLl2tOGEYxW1cZtCxNo7nBk1cuTniHaQ0BVhzPM00zh00Emkzk0gm');

const Payment = () => {
    const { appointmentId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://warm-cove-06931.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [appointmentId]);

    return (
        <Box>
            <Container>
                <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>Pay the fees to fix your appointment!</Typography>
                <Grid container sx={{ py: 4, textAlign: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} sx={{ textAlign: 'left', p: 2 }}>
                        <Typography variant="h5" sx={{ml: .5,  mb: 1.5 }}>Patient Details</Typography>
                        <table style={{ width: 500, fontSize: 17.5 }}>
                            <tbody>
                                <tr style={{ height: 30 }}>
                                    <td><b>Name</b></td>
                                    <td>{details.patientName}</td>
                                </tr>
                                <tr style={{ height: 30 }}>
                                    <td><b>Service</b></td>
                                    <td>{details.serviceName}</td>
                                </tr>
                                <tr style={{ height: 30 }}>
                                    <td><b>Date</b></td>
                                    <td>{details.date}</td>
                                </tr>
                                <tr style={{ height: 30 }}>
                                    <td><b>Time</b></td>
                                    <td>{details.time}</td>
                                </tr>
                                <tr style={{ height: 30 }}>
                                    <td><b>Fees</b></td>
                                    <td>$ {details.fees}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ textAlign: 'center', p: 2 }}>
                        {/* Payment System */}
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                details={details}
                            />
                        </Elements>
                        
                        {/* Coupon Code */}
                        <Box sx={{display :'flex', justifyContent: 'space-between', mt:8}}>
                            <TextField
                                variant="standard"
                                placeholder="Apply Code for Discount!"
                                sx={{width: '100%'}}
                            >
                            </TextField>
                            <Button sx={{ fontWeight: 'bold' }}>Apply</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Payment;