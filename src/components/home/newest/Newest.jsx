import product10 from '../../../assets/img/product_14.jpg';
import product7 from '../../../assets/img/product_15.jpg';
import './newest.css';


const Newest = () => {
    return (
        <section id="newest">
            <div className="row new-box">

                <div class="col-sm-12">
                    <div className="new-product">
                        <div className="box-product">
                            <div class="card img-box">
                                <img src={product10} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body content-1">
                                <h5 class="card-title">Quadcopter</h5>
                                <p class="card-text">The combination of APAS 4.0, four-directional obstacle sensing, and 12km 1080p O3 image transmission system offers you a safer, smarter, and smoother flying experience.</p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div className="new-product">
                        <div className="box-product">
                            <div class="card img-box">
                                <img src={product7} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body content-1">
                                <h5 class="card-title">Phantom</h5>
                                <p class="card-text">The adoption of Titanium alloy and magnesium alloy construction increases the rigidity of the Airframe and reduces weight, making the Phantom 4 Pro similar in weight to the Phantom 4.</p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newest;