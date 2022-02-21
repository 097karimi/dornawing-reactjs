import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { closeNav } from '../../../navbar/Open_Close_Nav';
import userimg from '../../assets/img/avatar-2.jpg';
import './dashboard_navbar.css';

const Dashboard_Navbar = () => {

    return (
        <section id="dash-nav">
            <nav className="navbar navbar-expand-lg navbar-light fixed" id="nav">

                <Sidebar />
                
                <div className="container-fluid" id="confluid">
                    {/* <a className="navbar-brand" href="/">
                        <img id="navbrand" src={logodornawing} alt="dornawing" />
                    </a> */}


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <span id="close" className="open" onClick={closeNav} >&times;</span>
                        <a href="/" className="logo-dorna">DornaWing</a>

                        <div className="d-flex form-nav" id="form-nav1">
                            {/* <div className="search-box">
                                <span className="las la-search"></span>
                                <input type="search" placeholder="search here ..." />
                            </div> */}
                            {/* <a className="lang-btn" href="#" ><Flag country="GB" size={20} /> EN </a> */}

                            <div className="dropdown user-btn display-flex" type="submit">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" role="button" aria-expanded="false" style={{ padding: 0, margin: 0 }}>
                                    <img src={`${userimg}`} alt="" />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                                </ul>
                            </div>
                            <div className="manager">
                                <h4>Amir Karimi</h4>
                                <span>Admin</span>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Dashboard_Navbar;