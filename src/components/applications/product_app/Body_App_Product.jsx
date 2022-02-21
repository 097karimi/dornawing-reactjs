import { BsChatRightTextFill } from 'react-icons/bs';
import Cover_Product from './Cover_Product';
import './body_app_product.css';

const Body_App_Product = () => {
    return (
        <section id="body-app-product">
            <div className="container" >
                <Cover_Product />
                <div className="row m-0">
                    <div className="body-description-product">
                        <h3>Title</h3>
                        <BsChatRightTextFill />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptas quisquam accusamus nemo nam, dolorum aliquid a
                            eligendi cum expedita sed aspernatur itaque sint ipsam officia
                            veritatis dignissimos reiciendis sit est.
                        </p>
                        <BsChatRightTextFill />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptas quisquam accusamus nemo nam, dolorum aliquid a
                            eligendi cum expedita sed aspernatur itaque sint ipsam officia
                            veritatis dignissimos reiciendis sit est.
                        </p>
                        <BsChatRightTextFill />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptas quisquam accusamus nemo nam, dolorum aliquid a
                            eligendi cum expedita sed aspernatur itaque sint ipsam officia
                            veritatis dignissimos reiciendis sit est.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Body_App_Product;