import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdmin = e => {
        const user = { email };

        fetch('https://warm-cove-06931.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .the(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });

        e.preventDefault(user)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdmin}>
                <TextField
                    id="standard-basic-email" label="Enter Your Email"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: '40%', my: 5 }} /><br />
                <Button type="submit" variant="contained" sx={{ bgcolor: '#13C2BC', fontWeight: 'bold' }}>Make Admin</Button>
                {success && <Alert severity="success" sx={{ mt: 3, width: '50%', mx: 'auto', fontWeight: 'bold' }}>Made Admin successfully!</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;