import product2 from '../../../assets/img/best-3.jpg';
import product1 from '../../../assets/img/best-4.jpg';
import '../../../assets/styles/home/best/best_item.css';


const Best_Item = ({ image, title, description }) => {
        
    return (
        <div class="col-lg-6">
            <div className="best-product">
                <div className="card-box">
                    <div class="card imgbox">
                        <img src={image} class="card-img-top" alt="..." />
                    </div>
                    <div class="card-body content-card">
                        <h3 class="card-title">{title}</h3>
                        <p class="card-text">{description}</p>
                        <div class="buttons">
                            <a href="#">Read More</a>
                            <a href="#">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Best_Item;