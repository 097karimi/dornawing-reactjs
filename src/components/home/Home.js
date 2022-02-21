import Navbar from "../navbar/Navbar";
import Cover from "./cover/Cover";
import Why_Usr from "./why_us/Why_Usr";
import Best from "./best/Best";
import Newest from "./newest/Newest";
import Popular_News from "./popular_news/Popular_News";
import Footer from "../footer/Footer";
import ScrollToTop from "../ScrollToTop";
import './home.css';

const Home = () => {
    return (
        <div id="home">
            <ScrollToTop />
            <Navbar />
            <Cover />
            <Why_Usr />
            <Best />
            <Newest />
            <Popular_News />
            <Footer />
        </div>
    );
}

export default Home;