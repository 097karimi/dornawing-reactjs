import './new_customer.css';
import user from '../../assets/img/avatar-7.jpg';
import user1 from '../../assets/img/avatar-1.jpeg';
import user2 from '../../assets/img/avatar-6.jpg';
import user3 from '../../assets/img/avatar-4.jpg';
import user4 from '../../assets/img/avatar-5.jpg';

const New_Customer = () => {
    return (
        <div id="new-customer">
            <div className="customer-title">
                <h5>New Customer</h5>
                <button>See all</button>
            </div>
            <div className="body-new-customer">
                <div className="customer">
                    <div className="info">
                        <img src={user} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                <hr />
                <div className="customer">
                    <div className="info">
                        <img src={user1} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                <hr />
                <div className="customer">
                    <div className="info">
                        <img src={user2} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                <hr />
                <div className="customer">
                    <div className="info">
                        <img src={user3} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                <hr />
                <div className="customer">
                    <div className="info">
                        <img src={user4} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                <hr />
                <div className="customer">
                    <div className="info">
                        <img src={user} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                <hr />
                <div className="customer">
                    <div className="info">
                        <img src={user} alt="" width="40px" height="40px" />
                        <div>
                            <h4>Lewis S. cunningham</h4>
                            <small>CEo Excerpt</small>
                        </div>
                    </div>
                    <div className="contact">
                        <span className="las la-user-circle"></span>
                        <span className="las la-comment"></span>
                        <span className="las la-phone"></span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default New_Customer;