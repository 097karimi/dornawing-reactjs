import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Body_Applications from "./boddy-app/Body_Applications";
import ScrollToTop from "../ScrollToTop";
import './applications.css';

const Applications = () => {
    return ( 
        <div id="applications">
            <ScrollToTop />
            <Navbar />
            <Body_Applications />
            <Footer />
        </div>
     );
}
 
export default Applications;