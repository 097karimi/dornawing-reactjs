import { FaFacebookF, FaGem, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaTwitter,FaHome, FaEnvelope, FaPrint, FaYoutube } from "react-icons/fa";
import '../../assets/styles/footer.css';


const Footer = () => {
    return (
        <section id="footer" class="text-center text-lg-start bg-light text-muted" >
            
                <section
                    class="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom connected-icons"
                >
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" class="me-4 text-reset">
                            <FaFacebookF />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FaTwitter />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FaYoutube />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FaInstagram />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FaLinkedin />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FaGithub />
                        </a>
                    </div>
                </section>
                <section class="container d-flex justify-content-center justify-content-lg-between list-items">
                    <div class="text-center text-md-start mt-5">
                        <div class="row mt-3 body-footer">
                            <div class="company col-md-3 col-lg-4 col-xl-3 mx-auto m-4">
                                <h6 class="text-uppercase fw-bolder mb-4">
                                    <FaGem class="me-3" />Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div class="products-items col-md-2 col-lg-2 col-xl-2 mx-auto m-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#" class="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#" class="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#" class="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#" class="text-reset">Laravel</a>
                                </p>
                            </div>

                            <div class="useful-links col-md-3 col-lg-2 col-xl-2 mx-auto m-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#" class="text-reset">Help</a>
                                </p>
                            </div>

                            <div class="contact-items col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 m-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><FaHome class="me-3" /> New York, NY 10012, US</p>
                                <p>
                                    <FaEnvelope class="me-3" />
                                    info@example.com
                                </p>
                                <p><FaPhone class="me-3" /> + 01 234 567 88</p>
                                <p><FaPrint class="me-3" /> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4 copyright">
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            

        </section>
    );
}

export default Footer;