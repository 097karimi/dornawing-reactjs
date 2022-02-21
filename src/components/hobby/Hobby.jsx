import Navbar from "../navbar/Navbar";
import Hobby_Applications from "./hobby_applications/Hobby_Applicatins";
import Hobby_Cover from './hobby_cover/Hobby_Cover';
import Hobby_Table from "./hobby_table/Hobby_Table";
import Footer from "../footer/Footer";
import ScrollToTop from "../ScrollToTop";

const Hobby = () => {
    return (
        <div className="hobby">
            <ScrollToTop />
            <Navbar />
            <Hobby_Cover />
            <Hobby_Table />
            <Hobby_Applications />
            <Footer />
        </div>
    );
}

export default Hobby;