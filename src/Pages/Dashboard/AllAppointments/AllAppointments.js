import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const AllAppointments = () => {
    const [allAppointment, setAllAppointment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAllAppointment(data));
    }, [])

    const handleDelete = id => {
        console.log('deleted', id);
        const url = `http://localhost:5000/appointments/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const confirm = window.confirm('Are you sure? You wanna delete this Appointment!')

                if (confirm === true) {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = allAppointment.filter(appointment => appointment._id !== id);
                        setAllAppointment(remaining)
                    }
                }
            })
    }

    return (
        <div>
            <Typography variant="h5">All Appointments - {allAppointment.length}</Typography>

            <TableContainer component={Paper} sx={{ width: '100%', my: 2, }}>
                <Table sx={{ width: '100%', textAlign: 'center' }} aria-label="simple table">
                    <TableHead sx={{ textAlign: 'center' }}>
                        <TableRow>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">Email</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">Phone</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">Service</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">Time</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">Date</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ textAlign: 'center' }}>
                        {
                            allAppointment.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontSize: 17, fontWeight: 'bold' }}>
                                        {row.patientName}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: 12 }} align="center"><a href={`mailto:${row.email}`} style={{ textDecoration: 'none' }}><AlternateEmailIcon title="Send Email" /></a></TableCell>
                                    <TableCell sx={{ fontSize: 12 }} align="center"><a href={`tel:${row.phone}`} style={{ textDecoration: 'none' }}><CallIcon title="Call Now" /></a></TableCell>
                                    <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }} align="center">{row.serviceName}</TableCell>
                                    <TableCell sx={{ fontSize: 17, fontWeight: 'bold'  }} align="center">{row.time}</TableCell>
                                    <TableCell sx={{ fontSize: 17, fontWeight: 'bold'  }} align="center">{row.date}</TableCell>
                                    <TableCell sx={{ fontSize: 17, color: 'red' }} align="right"><DeleteIcon title="Cancel Appointment" sx={{ cursor: 'pointer' }} onClick={() => handleDelete(row._id)} /></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllAppointments;