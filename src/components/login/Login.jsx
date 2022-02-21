import './login.css';
import { FaFacebookF, FaGoogle, FaInstagram, FaEnvelope, FaUserCircle } from "react-icons/fa";
import image from '../../assets/img/undraw_Follow_me_drone_kn76.png';
import { AiFillLock } from 'react-icons/ai';
import logodornawing from '../../assets/img/logo.png';
import { useState } from 'react';

const Login = () => {

    function openForm2() {
        document.getElementById("form-2").style.display = 'block';
        document.getElementById("form-1").style.display = 'none';
    }
    function openForm1() {
        document.getElementById("form-1").style.display = 'block';
        document.getElementById("form-2").style.display = 'none';
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const state = {
        email: '',
        password: ''
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    const handleLoginUser = (e) => {
        e.preventDefault()
    }

    return (
        <section id="login" >
            <a className="logo-box" href="/">
                <img id="logo" src={logodornawing} alt="dornawing" />
                <h1>DornaWing</h1>
            </a>
            <div className="l-form">
                <div className="shape1"></div>
                <div className="shape2"></div>

                <div className="form">
                    <img className="form-img" src={image} alt="" />
                    <form className="form-content" action="" id="form-1">
                        <h1 className="form-title">Welcome</h1>

                        <div className="form-div form-div-one">
                            <div className="form-icon">
                                <FaEnvelope />
                            </div>
                            <div className="form-div-input">
                                <input
                                    onChange={handleChange}
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-div">
                            <div className="form-icon">
                                <AiFillLock />
                            </div>
                            <div className="form-div-input">
                                <input
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                        <a href="#" className="form-forgot">Forgot Password?</a>

                        <input
                            type="submit"
                            className="form-button"
                            value="Login"
                            onClick={handleLoginUser}
                        />
                        <div className="option">
                            <p>Already Registered?<button className="btn" onClick={openForm2} >Sign Up</button></p>
                        </div>

                        <div className="form-social">
                            <span className="form-social-text">our login with</span>

                            <a href="" className="form-social-icon"><FaFacebookF /></a>
                            <a href="" className="form-social-icon"><FaGoogle /></a>
                            <a href="" className="form-social-icon"><FaInstagram /></a>
                        </div>
                    </form>



                    {/* Sign Up form */}

                    <form className="form-content" action="" id="form-2">
                        <h1 className="form-title">Welcome</h1>

                        <div className="form-div">
                            <div className="form-icon">
                                <FaUserCircle />
                            </div>
                            <div className="form-div-input">
                                <input type="text" className="form-input" placeholder="UserName" required />
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="form-icon">
                                <FaEnvelope />
                            </div>
                            <div className="form-div-input">
                                <input type="email" className="form-input" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="form-icon">
                                <AiFillLock />
                            </div>
                            <div className="form-div-input">
                                <input type="password" className="form-input" placeholder="Password" required />
                            </div>
                        </div>
                        <a href="#" className="form-forgot">Forgot Password?</a>

                        <input type="submit" className="form-button" value="Sign Up" />
                        <div className="option">
                            <p>You have registered before<button className="btn" onClick={openForm1} >Log In</button></p>
                        </div>

                        <div className="form-social">
                            <span className="form-social-text">our login with</span>

                            <a href="" className="form-social-icon"><FaFacebookF /></a>
                            <a href="" className="form-social-icon"><FaGoogle /></a>
                            <a href="" className="form-social-icon"><FaInstagram /></a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;