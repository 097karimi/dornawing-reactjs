import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import logodornawing from '../../assets/img/logo.png';
import { BsPersonFill } from 'react-icons/bs';
import { IoCart } from "react-icons/io5";
import '../../assets/styles/navbar.css';

const Navbar = () => {

    // change Size Navbar with scroll
    const [navSize, setNavSize] = useState(false)
    const sizeRef = React.useRef()
    sizeRef.current = navSize
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 270
            if (sizeRef.current !== show) {
                setNavSize(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <nav style={{
            background: navSize ? '#0b2534' : 'rgba(0, 0, 0, 0.3)',
            height: navSize ? '60px' : '80px', transition: '1s ease',
        }} className="navbar navbar-light navbar-expand-lg fixed-top col-sm-12">

            <div className="container nav-cont">
                <a className="navbar-brand" href="#" style={{ width: navSize ? '4%' : '5%', padding: '0', transition: '1s'}}>
                    <img src={logodornawing} alt="dornawing" style={{ width: '100%', height: '100%', backgroundcolor: 'secondary' }} />
                </a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active"href="#" style={{marginBottom: navSize ? '-5px' : '',}}>Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{marginBottom: navSize ? '-5px' : '',}}>NewsRoom</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{marginBottom: navSize ? '-5px' : '',}} >Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{marginBottom: navSize ? '-5px' : '',}} >About Us</a>
                        </li>
                    </ul>
                    <div className="d-flex form-nav">
                        <a className="shop-btn" href=""><IoCart /></a>

                        <div className="btn btn-secondary dropdown user-btn" type="submit">
                            <a id="navbarDropdown" data-bs-toggle="dropdown">
                                <BsPersonFill />
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Other Acant</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Log Out</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;