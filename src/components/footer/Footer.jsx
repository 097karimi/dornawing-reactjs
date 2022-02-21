import { FaFacebookF, FaGem, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter,FaHome, FaEnvelope, FaPrint, FaYoutube } from "react-icons/fa";
import './footer.css';


const Footer = () => {
    return (
        <section id="footer" className="text-center text-lg-start bg-light text-muted" >
            
                <section
                    className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom connected-icons"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="/" className="me-4 text-reset">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaTwitter />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaYoutube />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaInstagram />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaLinkedin />
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <FaGithub />
                        </a>
                    </div>
                </section>
                <section className="container d-flex justify-content-center justify-content-lg-between list-items">
                    <div className="text-center text-md-start mt-5">
                        <div className="row mt-3 body-footer">
                            <div className="company col-md-3 col-lg-4 col-xl-3 mx-auto m-4">
                                <h6 className="text-uppercase fw-bolder mb-4">
                                    <FaGem className="me-3" />Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="products-items col-md-2 col-lg-2 col-xl-2 mx-auto m-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="/" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div className="useful-links col-md-3 col-lg-2 col-xl-2 mx-auto m-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="/" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="contact-items col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 m-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><FaHome className="me-3" /> New York, NY 10012, US</p>
                                <p>
                                    <FaEnvelope className="me-3" />
                                    info@example.com
                                </p>
                                <p><FaPhone className="me-3" /> + 01 234 567 88</p>
                                <p><FaPrint className="me-3" /> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4 copyright">
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            

        </section>
    );
}

export default Footer;