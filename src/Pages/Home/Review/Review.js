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
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontStyle: 'italic', mt: 3, mb: 1 }}>❝ {review} ❞</Typography>
                    {star === '5' && <Box>
                        <FavoriteIcon /> <FavoriteIcon /> <FavoriteIcon /> <FavoriteIcon /> <FavoriteIcon />
                    </Box>}
                    {star === '4' && <Box>
                        <FavoriteIcon /> <FavoriteIcon /> <FavoriteIcon /> <FavoriteIcon />
                    </Box>}
                    {star === '3' && <Box>
                        <FavoriteIcon /> <FavoriteIcon /> <FavoriteIcon />
                    </Box>}

                    {star === '2' && <Box>
                        <FavoriteIcon /> <FavoriteIcon />
                    </Box>}
                    {star === '1' && <Box>
                        <FavoriteIcon />
                    </Box>}
                    <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>{name}</Typography>
                </Box>
            </Container>
        </Box >
    );
};

export default Review;