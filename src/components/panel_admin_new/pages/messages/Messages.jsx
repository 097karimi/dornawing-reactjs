import React, { Children } from 'react';
import Dashboard_Navbar from "../../components/dashboard_navbar/Dashboard_Navbar";
import Body_Messages from './body_messages/Body_Messages';
import './messages.css';

const Messages = () => {
    return (
        <section id="messages">
             <Dashboard_Navbar />
            <div id="body-messages">
                <Body_Messages />
            </div>
        </section>
    );
}

export default Messages;