import './product_list.css';

const Product_List = ({ item }) => {
    return (
        <div class="col-lg-6 col-md-6 col-xl-4 item-product" key={item.id} id={item.id} >
            <div className="product m-3">
                <div className="card-product-box">
                    <div class="card img-box-product">
                        <img src={item.image} class="card-img-product" alt="..." />
                    </div>
                    <div class="card-body content-card-product">
                        <h5 class="product-title">{item.name}</h5>
                        <h5>Price: ${item.price}</h5>
                        <h5>{item.qty}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_List;