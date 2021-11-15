import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const newDate = date.toLocaleDateString();

    useEffect(() => {
        const url = `https://warm-cove-06931.herokuapp.com/appointments/user?email=${user.email}&date=${newDate}`;

        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [user.email, newDate, token])

    const handleCancel = id => {
        const url = `https://warm-cove-06931.herokuapp.com/appointments/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const confirm = window.confirm('Are you sure? You wanna cancel this Appointment!')

                if (confirm === true) {
                    if (data.deletedCount) {
                        alert('Appointment Canceled Successfully!')
                        const remaining = appointments.filter(appointment => appointment._id !== id);
                        setAppointments(remaining)
                    }
                }
            })
    }

    return (
        <div>
            <Typography variant="h4" sx={{ml: 2}}>Appointments - {appointments.length}</Typography>

            <TableContainer component={Paper} sx={{ width: 700, my: 2 }}>
                <Table sx={{ width: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize : 15.5 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize : 15.5 }}>Schedule</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize : 15.5 }}>Service</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize : 15.5 }}>Fees</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 15.5  }}>Payment</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: 15.5  }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                    {row.patientName}
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>{row.time}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>{row.serviceName}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                    {row.fees}
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>{row.payment ? <Button sx={{ fontWeight: 'bold', fontSize: 16 }} disabled>Paid</Button> : <Link to={`/dashboard/payment/${row._id}`} style={{ textDecoration: 'none' }} className="disabledButton"><Button sx={{ fontWeight: 'bold', fontSize: 16 }}>Pay</Button></Link>}</TableCell>
                                <TableCell>
                                    {row.payment ? <CancelIcon sx={{ color: '#ccc' }} /> : <CancelIcon onClick={() => handleCancel(row._id)} sx={{cursor: 'pointer'}} />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="body1" sx={{textAlign: 'center'}}>If you want to cancel appointment after payment please <a href="mailto:admin@doctorsportal.bd">contact</a> with us! </Typography>
        </div>
    );
};

export default Appointments;