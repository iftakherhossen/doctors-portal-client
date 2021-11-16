import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation/>
            <AppointmentHeader date={date} setDate={setDate}/>
            <AvailableAppointment date={date}/>
        </div>
    );
};

export default Appointment;