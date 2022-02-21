import Dashboard_Navbar from '../../../components/dashboard_navbar/Dashboard_Navbar';
import user from '../../../assets/img/avatar-2.jpg';
import './single_message.css';

const Single_Message = () => {

    return (
        <section id="single-message">
            <Dashboard_Navbar />
            <div id="body-single-message">
                <div className="messages">
                    <div className="message-box">
                        <div className="header-message">
                            <div className="name-user">
                                <img src={user} alt="" />
                                <h4>John Doe</h4>
                            </div>
                            <span className="date-message">12-09-2021</span>
                        </div>
                        <div className="title-message">Tips for using a drone</div>
                        <div className="message-body">laudantium enim quasi est quidem magnam
                            voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis
                            et nam sapiente accusantium
                        </div>
                    </div>
                </div>
                <div className="answer">
                    <div className="answer-box">
                        <div className="header-answer">
                            <div className="name-user">
                                <img src={user} alt="" />
                                <h4>Admin</h4>
                            </div>
                            <span className="date-answer">12-09-2021</span>
                        </div>
                        <div className="answer-body">laudantium enim quasi est quidem magnam
                            voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis
                            et nam sapiente accusantium
                        </div>
                    </div>
                </div>
                <div className="messages">
                    <div className="message-box">
                        <div className="header-message">
                            <div className="name-user">
                                <img src={user} alt="" />
                                <h4>John Doe</h4>
                            </div>
                            <span className="date-message">12-09-2021</span>
                        </div>
                        <div className="title-message">Tips for using a drone</div>
                        <div className="message-body">laudantium enim quasi est quidem magnam
                            voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis
                            et nam sapiente accusantium
                        </div>
                    </div>
                </div>
                <div className="answer">
                    <div className="answer-box">
                        <div className="header-answer">
                            <div className="name-user">
                                <img src={user} alt="" />
                                <h4>Admin</h4>
                            </div>
                            <span className="date-answer">12-09-2021</span>
                        </div>
                        <div className="answer-body">laudantium enim quasi est quidem magnam
                            voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis
                            et nam sapiente accusantium
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Single_Message;