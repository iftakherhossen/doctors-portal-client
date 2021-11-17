import { Typography, Container, CircularProgress, Button, InputAdornment, FormControl, Input, Grid, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { HashLink } from 'react-router-hash-link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const PostReviews = () => {
    const { user, isLoading } = useAuth();
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://warm-cove-06931.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setReviewSuccess(true);
                    reset();
                }
            })
    }

    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Review Our Service!</Typography>
                </Box>
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={8} md={4} sx={{ mx: 'auto' }}>
                            <Box sx={{ textAlign: 'center', my: 4 }}>
                                {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormControl sx={{ width: 1 }} variant="standard">
                                        <Input
                                            {...register("name", { required: true })}
                                            variant="standard"
                                            defaultValue={user.displayName}
                                            sx={{ width: '100%', mb: 2, fontSize: 16 }}
                                            type="text"
                                            startAdornment={<InputAdornment position="start"><AccountCircleIcon sx={{ color: '#aaa', fontSize: 28 }} /></InputAdornment>}
                                        />
                                    </FormControl>
                                    {errors.name && <span style={{ color: 'red' }}>Your Name is required!</span>}<br />
                                    <FormControl sx={{ width: 1 }} variant="standard">
                                        <Input
                                            {...register("email", { required: true })}
                                            variant="standard"
                                            defaultValue={user.email}
                                            sx={{ width: '100%', mb: 2, fontSize: 16 }}
                                            type="email"
                                            startAdornment={<InputAdornment position="start"><AlternateEmailIcon sx={{ color: '#aaa', fontSize: 25 }} /></InputAdornment>}
                                        />
                                    </FormControl>
                                    {errors.email && <span style={{ color: 'red' }}>Your Email is required!</span>}<br />
                                    <textarea
                                        placeholder="Write Your Opinion!"
                                        {...register("review", { required: true })}
                                        variant="standard"
                                        style={{ width: '100%', mb: 2, height: 100, fontSize: 16, outline: 0, border: 0, borderBottom: '1px solid #aaa' }}
                                    ></textarea>
                                    {errors.review && <span style={{ color: 'red' }}>Write Something!</span>}<br />
                                    <FormControl sx={{ width: 1 }} variant="standard">
                                        <Input
                                            {...register("star", { required: true })}
                                            variant="standard"
                                            sx={{ width: '100%', mb: 2, fontSize: 16 }}
                                            InputProps={{ inputProps: { min: 0, max: 5 } }}
                                            type="number"
                                            placeholder="0 - 5"
                                            startAdornment={<InputAdornment position="start"><FavoriteIcon sx={{ color: '#aaa', fontSize: 25 }} /></InputAdornment>}
                                        />
                                    </FormControl>
                                    {errors.ratings && <span style={{ color: 'red' }}>Rate Us!</span>}<br />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 3, bgcolor: '#13C2BC' }}
                                    >Post</Button>
                                </form>}
                            </Box>
                            <Box>
                                {isLoading && <CircularProgress />}
                                {reviewSuccess && <Alert severity="success" sx={{ mt: 3, width: '100%', mx: 'auto', fontWeight: 'bold' }}>Thanks For the Review! <br/> <HashLink to="/home#reviews">See Your Review</HashLink></Alert>}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default PostReviews;