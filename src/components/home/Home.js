import Navbar from "../navbar/Navbar";
import Cover from "./cover/Cover";
import Why_us from "./why_us/Why_us";
import Why_Usr from "./why_us/Why_Usr";
import New_Why from "./why_us/New_Why";
import Best from "./best/Best";
import Newest from "./newest/Newest";
import Popular_News from "./popular_news/Popular_News";
import Footer from "../footer/Footer";
import '../../assets/styles/home/home.css';

const Home = () => {
    return (
        <div id="home">
            <Navbar />
            <Cover />
            {/* <Why_us /> */}
            <Why_Usr />
            {/* <New_Why /> */}
            <Best />
            <Newest />
            {/* <Newest /> */}
            <Popular_News />
            <Footer />
        </div>
    );
}

export default Home;