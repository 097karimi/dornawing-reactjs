import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Cover_Newsroom from "./Cover_Newsroom";
import Body_Newsroom from "./Body_Newsroom";
import Recent_News from "./Recent_News";
import ScrollToTop from "../ScrollToTop";
import './newsroom.css';

const Newsroom = () => {
    return (
        <div id="newsroom">
            <ScrollToTop />
            <Navbar />
            <div className="container">
                <div className="row m-0 body-news-one">
                    <div className="col-md-9">
                        <Cover_Newsroom />
                        <Body_Newsroom />
                    </div>
                    <div className="col-md-3 ">
                        <div className="position-sticky">
                            <Recent_News />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Newsroom;