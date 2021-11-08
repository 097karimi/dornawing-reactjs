import { useState, useEffect } from 'react';
import Best_Item from './Best_Item';
import '../../../assets/styles/home/best/best.css';
import axios from 'axios';
import product2 from '../../../assets/img/best-3.jpg';
import product1 from '../../../assets/img/best-4.jpg';

const Best = () => {

    // const [fake, setFake] = useState([]);
    // console.log(fake);
    // useEffect(() => {
    //     fakestore();
    // }, [])

    // const fakestore = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const jsonData = await response.json();
    //     setFake(jsonData);
    // }

    return (
        <section id="best">
            <div className="row product-box">

                {/* {fake.map((item) => {
                    return (
                        <Best_Item
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })} */}
                <div class="col-lg-6">
                    <div className="best-product">
                        <div className="card-box">
                            <div class="card imgbox">
                                <img src={product1} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body content-card">
                                <h3 class="card-title">DJI Smart Controller</h3>
                                <p class="card-text">This powerful remote controller features a 5.5-inch 1080p high-brightness display for pure performance. Compatible with the DJI GO 4 and DJI Fly apps, it also supports the installation of third-party apps.</p>
                                <div class="buttons">
                                    <a href="#">Read More</a>
                                    <a href="#">Buy Now</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div className="best-product">
                        <div className="card-box">
                            <div class="card imgbox">
                                <img src={product2} class="card-img-top" alt="..." />
                            </div>
                            <div class="card-body content-card">
                                <h3 class="card-title">DJI Air 2S</h3>
                                <p class="card-text">DJI Air 2S has the ability to perceive its environment in four directions: up, down, forward, and backward. The algorithms for Advanced Pilot Assistance Systems (APAS 4.0) have been further improved, allowing DJI Air 2S to actively avoid obstacles in more complex scenarios and at high speeds.</p>
                                <div class="buttons">
                                    <a href="#">Read More</a>
                                    <a href="#">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Best;