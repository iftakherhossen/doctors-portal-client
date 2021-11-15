import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Alert, Button } from '@mui/material';

const CheckoutForm = ({ details }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { name, fees, email } = details;
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message)
        }
        else {
            setError('');
            console.log(paymentMethod)    
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
                <Button type="submit" disabled={!stripe} style={{fontWeight :'bold', fontSize: 17, mt:2}}>
                    Pay {fees}
                </Button>
            </form>
            {
                error && <Alert severity="error">{error}</Alert>
            }
        </div>
    );
};

export default CheckoutForm;