import cover_product from '../../../assets/img/product_14.jpg';
import './cover_product.css';

const Cover_Product = () => {
    return (
        <div className="row m-0">
            <div className="body-cover-product">
                <img src={cover_product} alt="" />
                <h4>Dornawing Product Applications</h4>
            </div>
        </div>
    );
}

export default Cover_Product;