import React, { Component } from 'react';
import './scheduled-appointments.scss';
import Appointment from '../appointment/appointment';

class ScheduledAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = { appointments : [
             {
                day: 'Martes 30 abril 2020',
                time: '4:00 P.M',
                custumerName: 'Ana Maria',
                description: 'Esta es la descripción de la cita de Ana Maria'
            },
            {
                day: 'Miercoles 31 abril 2020',
                time: '4:00 P.M',
                custumerName: 'Jose Maria',
                description: 'Esta es la descripción de la cita de Jose Maria'
            },
            {
                day: 'Jueves 1 mayo 2020',
                time: '4:00 P.M',
                custumerName: 'Jonathan Torres',
                description: 'Esta es la descripción de la cita de Jonathan Torres'
            }
        ]}
    }
    
    render() {
        return ( <div className="scheduled-appointments">
            <button className="appointment-button">Crear nueva cita</button>
            <div className="schedule-title">Citas Agendadas</div>
            {this.state.appointments.map(appointment => {
                return <Appointment {...appointment}></Appointment>
            })}
        </div> );
    }
}
 
export default ScheduledAppointments;