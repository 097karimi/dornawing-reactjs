import image from '../../../assets/img/best-4.jpg';
import './best_item.css';


const Best_Item = () => {

    return (
        <div class="col-lg-6">
            <div className="best-product">
                <div className="card-box">
                    <div class="card imgbox">
                        <img src={image} class="card-img-top" alt="..." />
                    </div>
                    <div class="card-body content-card">
                        <h3 class="card-title">DJI Smart Controller</h3>
                        <p class="card-text">
                            This powerful remote controller features a 5.5-inch 1080p high-brightness
                            display for pure performance. Compatible with the DJI GO 4 and DJI Fly apps,
                            it also supports the installation of third-party apps.
                        </p>
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