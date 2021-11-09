import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setPatients(data));
    }, [])    

    return (
        <div>
            <Typography variant="h5">Patients - {patients.length}</Typography>

            <TableContainer component={Paper} sx={{ width: '100%', my: 2, }}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>Patient ID</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>Email</TableCell>
                            <TableCell sx={{ fontSize: 17, fontWeight: 'bold' }}>Appointment List</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            patients.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                    <TableCell sx={{fontSize: 16}}>{row._id}</TableCell>
                                    <TableCell component="th" scope="row" sx={{ fontSize: 16, fontWeight: 'bold'}}>
                                        {row.displayName}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: 16 }}><a href={`mailto:${row.email}`} style={{ textDecoration: 'none' }}>{row.email}</a></TableCell>
                                    <TableCell sx={{ fontSize: 16 }}><a href="#" style={{ textDecoration: 'none' }}>View Appointments</a></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Patients;