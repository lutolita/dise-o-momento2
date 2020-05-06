import React, { Component } from 'react';
import Header from './layout/header';
import './main-container.scss';
import ScheduledAppointments from './components/scheduled-appointments/scheduled-apointments';
import ViewMore from './components/view-more/view-more';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import Form from './components/form/form';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-container">
                <Header/>
                    
                    
                    <Switch>
                        <Route
                        exact
                        path="/home"
                        component={ScheduledAppointments} />
                        <Route
                        exact
                        path="/"
                        component={ScheduledAppointments} />
                        <Route
                        exact
                        path="/view"
                        component={ViewMore} />
                        <Route
                        exact
                        path="/form"
                        component={Form} />
                    </Switch>
            </div>
        );
    }
}
 
export default MainContainer;