import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const newDate = date.toLocaleDateString();
    
    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${newDate}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [user.email, newDate])

    return (
        <div>
            <Typography variant="h4">Appointments - {appointments.length}</Typography>

            <TableContainer component={Paper} sx={{ width: 700, my: 2 }}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Schedule</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Service</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell align="right">

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;