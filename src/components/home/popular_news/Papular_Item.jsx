import product1 from '../../../assets/img/product_10.webp';
import product2 from '../../../assets/img/product_6.jpg';
import product3 from '../../../assets/img/product_3.jpg';
import { BsLink45Deg } from 'react-icons/bs';
import { IoShareSocialSharp } from "react-icons/io5";
import '../../../assets/styles/home/papular/papular_item.css';

const Papular_Item = () => {
    return (
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
                        <IoShareSocialSharp />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Papular_Item;