import React, { Children } from 'react';
import Dashboard_Navbar from "./components/dashboard_navbar/Dashboard_Navbar";
import Home_Dashboard from './components/home_dashboard/Home_Dashboard';
import './panel_admin_two.css'


const Panel_Admin_Two = ({ Children }) => {
    return (
        <section id="panel-admin-two">
            <Dashboard_Navbar />
            <div id="body-dashboard">
                {Children}
                <Home_Dashboard />
            </div>
        </section>
    );
}

export default Panel_Admin_Two;