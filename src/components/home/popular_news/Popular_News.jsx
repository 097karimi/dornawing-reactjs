import product1 from '../../../assets/img/product_10.webp';
import product2 from '../../../assets/img/product_6.jpg';
import product3 from '../../../assets/img/product_3.jpg';
import { IoShareSocialSharp } from "react-icons/io5";
import './popular_news.css';
import Papular_Item from './Papular_Item';

const Popular_News = () => {
    return (
        <section id="popular-news" >
            <div className="container">
                <div className="row popular-title">
                    <h4>Popular news</h4>
                </div>
                <div class="row box-product">
                    {/* <Papular_Item />
                    <Papular_Item />
                    <Papular_Item /> */}





                    <div class="col-lg-4">
                        <div className="product">
                            <div className="box-card">
                                <div class="card imgBx">
                                    <img src={product1} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body content">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet Minus nobis aspernatur consectetur adipisicing elit.</p>
                                    <a href="">Read More</a>
                                </div>
                                <button className="btn icon-link">
                                    {/* <BsLink45Deg /> */}
                                    <IoShareSocialSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div className="product">
                            <div className="box-card">
                                <div class="card imgBx">
                                    <img src={product2} class="card-img-top" alt="..." />
                                    <div class="card-body content">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet Minus nobis aspernatur consectetur adipisicing elit.</p>
                                        <a href="">Read More</a>
                                    </div>
                                </div>
                                <button className="btn icon-link">
                                    {/* <BsLink45Deg /> */}
                                    <IoShareSocialSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div className="product">
                            <div className="box-card">
                                <div class="card imgBx">
                                    <img src={product3} class="card-img-top" alt="..." />
                                    <div class="card-body content">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet Minus nobis aspernatur consectetur adipisicing elit.</p>
                                        <a href="">Read More</a>
                                    </div>
                                </div>
                                <button className="btn icon-link">
                                    {/* <BsLink45Deg /> */}
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

export default Popular_News;