import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id="reviews">
            <Box>
                <Box>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>What People Say About Us!</Typography>
                </Box>
                <Box>
                    <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
                        {reviews.map((review, _id) => (
                            <Grid item xs={12} sm={10} md={5} key={_id} sx={{ m: 3, bgcolor: '#eee', borderRadius: '50px', boxShadow: 2 }}>
                                <Review
                                    key={review.key}
                                    reviews={review}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default Reviews;