import { IoShareSocialSharp } from 'react-icons/io5';
import product5 from '../../../assets/img/product_15.jpg';
import '../../../assets/styles/applications/body_app/item_body_app.css';

const Item_Body_App = () => {
    return (
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
                        <a href="/hobby">Read More</a>
                    </div>
                    <button className="btn icon-link">
                        <IoShareSocialSharp />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item_Body_App;