import { TableCell, TableContainer, Paper, TableHead, Table, TableRow, TableBody, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://warm-cove-06931.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    const handleDelete = id => {
        const url = `https://warm-cove-06931.herokuapp.com/reviews/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const confirm = window.confirm('Are you sure? You wanna delete this Review!')

                if (confirm === true) {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining)
                    }
                }
            })
    }

    return (
        <Box>
            <Box>
                <TableContainer component={Paper} sx={{ width: '100%', my: 2, }}>
                    <Table sx={{ width: '100%', textAlign: 'center' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>
                                    Name
                                </TableCell>
                                <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>
                                    Review
                                </TableCell>
                                <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">
                                    Star
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                reviews.map((review =>
                                    <TableRow
                                        key={review._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 'bold' }}>
                                            {review.name}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }}>{review.review}</TableCell>
                                        <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }} align="center">{review.star}</TableCell>
                                        <TableCell align="right">
                                            <IconButton aria-label="delete" onClick={() => handleDelete(review._id)}>
                                                <DeleteIcon
                                                    fontSize="inherit"
                                                    sx={{ color: 'red' }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default ManageReviews;