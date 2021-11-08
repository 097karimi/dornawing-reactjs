import { BsChevronCompactDown } from 'react-icons/bs';
import icon1 from '../../../assets/img/1.png';
import icon2 from '../../../assets/img/2.png';
import icon3 from '../../../assets/img/3.png';
import '../../../assets/styles/home/why_us/why_usr.css';

const Why_Us = () => {
    return (
        <section id="why-us">
            <div className="container marketing">
                <div className="row test-title">
                    <h4>Why Us ?</h4>
                </div>
                <div class="row boxs">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <img src={icon1} alt="" />
                                    <h3>Design</h3>
                                    <BsChevronCompactDown style={{color: '#fff',fontSize: '4rem', padding: 0,margin: 0 }}/>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe expedita debitis! Ipsam, voluptatum.
                                        Minus nobis aspernatur distinctio quae consectetur nihil maxime odit beatae ea porro. Ex quas
                                        consequuntur modi.</p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <img src={icon2} alt="" />
                                    <h3>Launch</h3>
                                    <BsChevronCompactDown style={{color: '#fff',fontSize: '4rem', padding: 0,margin: 0 }}/>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe expedita debitis! Ipsam, voluptatum.
                                        Minus nobis aspernatur distinctio quae consectetur nihil maxime odit beatae ea porro. Ex quas
                                        consequuntur modi.</p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <img src={icon3} alt="" />
                                    <h3>Code</h3>
                                    <BsChevronCompactDown style={{color: '#fff',fontSize: '4rem', padding: 0,margin: 0 }}/>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe expedita debitis! Ipsam, voluptatum.
                                        Minus nobis aspernatur distinctio quae consectetur nihil maxime odit beatae ea porro. Ex quas
                                        consequuntur modi.</p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Why_Us;