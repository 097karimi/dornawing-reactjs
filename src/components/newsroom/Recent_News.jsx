import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import recent_news1 from '../../assets/img/product_12.webp';
import recent_news2 from '../../assets/img/product_11.webp';
import recent_news3 from '../../assets/img/product_13.jpg';
import './recent_news.css';

const Recent_News = () => {
    return (
        <section id="all-recent-news">
            <div className="subscribe">
                <div className="title-subscribe">
                    <h5>SUBSCRIBE TO DornaWing</h5>
                </div>
                <p>Be the first to get updates and new offers.</p>
                <input type="email" placeholder="Your Email Address" required="required fields" required="true" />
                <button type="submit" className="btn">SUBSCRIBE</button>
            </div>
            <hr />

            <div className="social-media">
                <div className="title-social">
                    <h5>Social Media</h5>
                </div>
                <a href="#" class="me-4 text-reset"><FaFacebookF /></a>
                <a href="#" class="me-4 text-reset"><FaTwitter /></a>
                <a href="#" class="me-4 text-reset"><FaYoutube /></a>
                <a href="#" class="me-4 text-reset"><FaInstagram /></a>
                <a href="#" class="me-4 text-reset"><FaLinkedin /></a>
                <a href="#" class="me-4 text-reset"><FaGithub /></a>
            </div>
            <hr />

            <div className="recent-news">
                <div className="recent-title">
                    <h4>Recent News</h4>
                </div>

                <div className="recent-item">
                    <img src={recent_news1} alt="" />
                    <div className="recent-card">
                        <h5><a href="">Title</a></h5>
                        <div className="date">
                            <a className="tag-item" href="">news</a>
                            <span>2021-11-14</span>
                        </div>
                    </div>
                </div>
                <div className="recent-item">
                    <img src={recent_news2} alt="" />
                    <div className="recent-card">
                        <h5><a href="">Title</a></h5>
                        <div className="date">
                            <a className="tag-item" href="">news</a>
                            <span>2021-11-14</span>
                        </div>
                    </div>
                </div>
                <div className="recent-item">
                    <img src={recent_news3} alt="" />
                    <div className="recent-card">
                        <h5><a href="">Title</a></h5>
                        <div className="date">
                            <a className="tag-item" href="">news</a>
                            <span>2021-11-14</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="news-tags">
                <div className="tags-title">
                    <h4>News Tags</h4>
                </div>
                <div className="tags">
                    <a className="tag-item" href="#">dornawing</a>
                    <a className="tag-item" href="#">drone</a>
                    <a className="tag-item" href="#">dijinext</a>
                    <a className="tag-item" href="#">news</a>
                    <a className="tag-item" href="#">dornawing</a>
                    <a className="tag-item" href="#">drone</a>
                    <a className="tag-item" href="#">dijinext</a>
                    <a className="tag-item" href="#">news</a>
                    <a className="tag-item" href="#">drone</a>
                    <a className="tag-item" href="#">dijinext</a>
                </div>
            </div>


        </section>
    );
}

export default Recent_News;