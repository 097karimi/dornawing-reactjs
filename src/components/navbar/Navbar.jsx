import * as React from 'react';
import { useEffect, useState } from 'react';
import logodornawing from '../../assets/img/logo.png';
import { BsPersonFill } from 'react-icons/bs';
import { closeNav } from './Open_Close_Nav';
import { openNav } from './Open_Close_Nav';
import { IoCart } from "react-icons/io5";
import userimg from '../../assets/img/user.png';
import Flag from 'react-flagkit';
import '../../assets/styles/navbar.css';

const Navbar = () => {

    // change Color & Size Navbar with scroll
    const [navSize, setNavSize] = useState(false)
    const sizeRef = React.useRef()
    sizeRef.current = navSize
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 170
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
        <nav style={{ background: navSize ? '#0b2534' : 'rgba(0, 0, 0, 0.3)', height: navSize ? '60px' : '80px', transition: '1s' }}
            className="navbar navbar-expand-lg navbar-light fixed-top" id="nav">

            <div className="container-fluid" id="confluid">
                <a className="navbar-brand" href="/">
                    <img id="navbrand" src={logodornawing} alt="dornawing" style={{ width: navSize ? '80%' : '90%' }} />
                </a>
                <button className="navbar-toggler" type="button" id="button-toggler">
                    <span id="open" onClick={openNav} >&#9776;</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span id="close" className="open" onClick={closeNav} >&times;</span>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: navSize ? '.9rem' : '1rem' }}>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Surveying</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Argiculture</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hobby">Hobby</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="applications" >Applications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Newsroom</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                    <div className="d-flex form-nav" id="form-nav1">
                        <a className="lang-btn" href="" style={{ fontSize: navSize ? '.8rem' : '1rem' }}><Flag country="GB" size={20} /> EN </a>
                        <a className="shop-btn" href="" style={{ fontSize: navSize ? '1.6rem' : '2rem' }}><IoCart /></a>
                        <div className="dropdown user-btn display-flex" type="submit">

                            <a id="navbarDropdown" data-bs-toggle="dropdown" style={{
                                width: navSize ? '1.9rem' : '2.2rem',
                                right: navSize ? '.5rem' : '0.16rem',
                                padding: 0,
                                margin: 0
                            }}>
                                {/* <BsPersonFill /> */}
                                <img src={`${userimg}`} alt="" />
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Log Out</a></li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;