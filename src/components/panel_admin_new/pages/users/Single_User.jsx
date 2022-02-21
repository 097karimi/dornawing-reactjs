import { FaGoogle, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsFillCalendarMonthFill } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import './single_user.css';
import user from '../../assets/img/avatar-2.jpg';

const Single_User = ({ item }) => {
    return (
        <section id="single-user">
            <div id="body-single-user">
                <div className="page">
                    <div className="page-container">
                        <article className="profile">
                            <div className="icon-close">
                                <IoCloseCircle color="#f00" fontSize="2rem" data-bs-dismiss="modal" />
                            </div>
                            <header className="profile-header">
                                <img src={user} alt="" className="profile-avatar" />
                                <h3 className="profile-name">{item.name}</h3>
                            </header>
                            <div className="profile-stats">
                                <div className="profile-group">
                                    <div className="profile-data">
                                        <FaEnvelope />
                                        <span className="profile-value">Email:</span>
                                        <h4>{item.email}</h4>
                                    </div>
                                    <div className="profile-data">
                                        <FaPhone />
                                        <span className="profile-value">Phone:</span>
                                        <h4>+98123456789</h4>
                                    </div>
                                    <div className="profile-data">
                                        <BsFillCalendarMonthFill />
                                        <span className="profile-value">DATE CREATED:</span>
                                        <h4>2021-11-09</h4>
                                    </div>
                                </div>
                            </div>

                            <footer className="profile-socials">
                                <a href="" className="profile-social">
                                    <FaPhone />
                                </a>
                                <a href="" className="profile-social">
                                    <FaInstagram />
                                </a>
                                <a href="" className="profile-social">
                                    <FaGoogle />
                                </a>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Single_User;