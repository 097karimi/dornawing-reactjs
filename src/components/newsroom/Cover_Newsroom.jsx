import cover_news from '../../assets/img/product_4.jpg';
import './cover_newsroom.css';

const Cover_Newsroom = () => {
    return (
        <div className="row m-0">
            <div className="body-cover-newsroom">
                <img src={cover_news} alt="" />
                <div className="title-cover-news">
                    <h4>Dornawing News</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad error pariatur
                        repudiandae delectus in, ipsa reprehenderit quod veritatis dolorum et magni.
                    </p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default Cover_Newsroom;