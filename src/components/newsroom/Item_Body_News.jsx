import { IoShareSocialSharp } from 'react-icons/io5';
import product5 from '../../assets/img/product_15.jpg';
import './item_body_news.css';


const Item_Body_News = () => {
    return (
        <div class="col-lg-6">
            <div className="news">
                <div className="card-news-box">
                    <div class="card img-box-news">
                        <img src={product5} class="card-img-news" alt="..." />
                    </div>
                    <div class="card-body content-card-news">
                        <h5 class="news-title"><a href="">Card title</a></h5>
                        <div className="date">
                            <span>2021-11-14</span>
                            <a className="tag-news" href="">News</a>
                        </div>
                    </div>
                    <button className="btn icon-link">
                        <IoShareSocialSharp />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item_Body_News;