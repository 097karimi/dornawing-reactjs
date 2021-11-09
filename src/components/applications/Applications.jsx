import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Pagination from "../pagination/Pagination";
import Body_Applications from "./boddy-app/Body_Applications";
import '../../assets/styles/applications/applications.css';

const Applications = () => {
    return ( 
        <div id="applications">
            <Navbar />
            <Body_Applications />
            {/* <Pagination /> */}
            <Footer />
        </div>
     );
}
 
export default Applications;