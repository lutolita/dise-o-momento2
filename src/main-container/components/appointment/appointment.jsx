import React, { Component } from 'react';
import './appointment.scss';
import { Link } from 'react-router-dom';

class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        const data = this.props;
        return (
            <div className="appointment-container">
                <div className="app-data">
                    Datos de la cita
                </div>
            <div>Fecha {data.day}</div>
            <div>Hora: {data.time}</div>
            <div>Nombre Cliente: {data.custumerName}</div>
            <div>Descripción: {data.description}</div>
            <div className="buttons-container">
                <Link to="/view"><button className="app-button">Ver más</button></Link>
                <Link to="/form"><button className="app-button">Editar</button></Link>
                <button className="app-button">Eliminar</button>
            </div>
            </div> );
    }
}
 
export default Appointment;