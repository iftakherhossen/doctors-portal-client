import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Review = ({ reviews }) => {
    const { name, review, star } = reviews;

    return (
        <Box sx={{ width: '100%' }}>
            <Container>
                <Box sx={{ width: '100%', textAlign: 'center', m: 'auto' }}>
                    <Box sx={{ mt: 2 }}>
                        {star >= '5' && <Box>
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                        </Box>}
                        {star === '4' && <Box>
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                        </Box>}
                        {star === '3' && <Box>
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                        </Box>}

                        {star === '2' && <Box>
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                        </Box>}
                        {star <= '1' && <Box>
                            <FavoriteIcon sx={{ fontSize: 18 }} />
                        </Box>}
                    </Box>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', mt: 2, height: 55, py: 'auto' }}>❝ &nbsp;{review} ❞</Typography>
                    <span>●</span>
                    <Typography variant="body1" sx={{ mt: 0.5, mb: 2, fontWeight: 'bold', color: '#323232' }}>{name}</Typography>
                </Box>
            </Container>
        </Box >
    );
};

export default Review;