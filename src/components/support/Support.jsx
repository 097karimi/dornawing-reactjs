import sales from '../../assets/img/support_1.png';
import comments from '../../assets/img/support_2.png';
import technical from '../../assets/img/support_3.png';
import support_cover from '../../assets/img/support_5.jpg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import ScrollToTop from '../ScrollToTop';
import './support.css';

const Support = () => {
    return (
        <section id="support">
            <ScrollToTop />
            <Navbar />

            <div className="row m-0">
                    <div className="support-cover">
                        <img src={support_cover} alt="" />
                    </div>
                </div>
            <div className="container">
                <div className="row m-0">
                    <div className="support-title">
                        <h4>Welcome To DornaWing Support</h4>
                    </div>
                </div>
                <div className="row item-support">
                    <div className="col-md-4">
                        <div className="sales">
                            <a href="">
                                <img src={sales} alt="" />
                                <h5>Sales support</h5>
                            </a>
                            <p>info@dornawing.com</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="technical">
                            <a href="">
                                <img src={technical} alt="" />
                                <h5>Technical support</h5>
                            </a>
                            <p>info@dornawing.com</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="comments">
                            <a href="">
                                <img src={comments} alt="" />
                                <h5>Comments and suggestions</h5>
                            </a>
                            <p>info@dornawing.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Support;