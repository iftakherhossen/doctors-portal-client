import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert, Button, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';

const CheckoutForm = ({ details }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { _id, patientName, fees, } = details;
    const { user } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ fees })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [fees])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        }
        else {
            setError('');
            console.log(paymentMethod)
        }

        // payment intent 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email,
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your Payment Processed Successfully!');
            console.log(paymentIntent);
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            
            const url = `https://warm-cove-06931.herokuapp.com/appointments/${_id}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Box sx={{ mt: 3 }}>
                    {processing ? <CircularProgress /> : <Button type="submit" disabled={!stripe || success} style={{ fontWeight: 'bold', fontSize: 17 }}>
                        Pay {fees}
                    </Button>}
                </Box>
            </form>
            {
                error && <Alert severity="error">{error}</Alert>
            }
            {
                success && <Alert severity="success">{success}</Alert>
            }
        </div>
    );
};

export default CheckoutForm;