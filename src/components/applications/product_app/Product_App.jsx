import Navbar from "../../navbar/Navbar";
import Body_App_Product from "./Body_App_Product";
import Footer from "../../footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import './product_app.css';

const Product_App = () => {
    return ( 
        <section id="product-app" >
            <ScrollToTop />
            <Navbar />
            <Body_App_Product />
            <Footer />
        </section>
     );
}
 
export default Product_App;