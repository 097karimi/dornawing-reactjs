import { IoShareSocialSharp } from 'react-icons/io5';
import product3 from '../../../assets/img/product_8.jpg';
import product4 from '../../../assets/img/product_9.jpg';
import product5 from '../../../assets/img/product_15.jpg';
import product6 from '../../../assets/img/product_16.jpg';
import './hobby_applications.css';

const Applications = () => {
    return (
        <section id="hobby-applications" >
            <div className="container" >
                <div className="row applications-title">
                    <h4>Applications</h4>
                </div>

                <div className="row applicatins-box">

                    <div class="col-lg-6">
                        <div className="best-applicatins">
                            <div className="card-app-box">
                                <div class="card img-box-app">
                                    <img src={product3} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body content-card-app">
                                    <h5 class="app-title">Card title</h5>
                                    <p class="app-text">Lorem ipsum dolor sit amet Minus nobis
                                        aspernatur consectetur adipisicing elit.</p>
                                    <a href="">Read More</a>
                                </div>
                                <button className="btn icon-link">
                                    <IoShareSocialSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div className="best-applicatins">
                            <div className="card-app-box">
                                <div class="card img-box-app">
                                    <img src={product4} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body content-card-app">
                                    <h5 class="app-title">Card title</h5>
                                    <p class="app-text">Lorem ipsum dolor sit amet Minus nobis
                                        aspernatur consectetur adipisicing elit.</p>
                                    <a href="">Read More</a>
                                </div>
                                <button className="btn icon-link">
                                    <IoShareSocialSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div className="best-applicatins">
                            <div className="card-app-box">
                                <div class="card img-box-app">
                                    <img src={product5} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body content-card-app">
                                    <h5 class="app-title">Card title</h5>
                                    <p class="app-text">Lorem ipsum dolor sit amet Minus nobis
                                        aspernatur consectetur adipisicing elit.</p>
                                    <a href="">Read More</a>
                                </div>
                                <button className="btn icon-link">
                                    <IoShareSocialSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div className="best-applicatins">
                            <div className="card-app-box">
                                <div class="card img-box-app">
                                    <img src={product6} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body content-card-app">
                                    <h5 class="app-title">Card title</h5>
                                    <p class="app-text">Lorem ipsum dolor sit amet Minus nobis
                                        aspernatur consectetur adipisicing elit.</p>
                                    <a href="">Read More</a>
                                </div>
                                <button className="btn icon-link">
                                    <IoShareSocialSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Applications;