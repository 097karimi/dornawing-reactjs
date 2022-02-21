import imgcover from '../../../assets/img/product_14.jpg';
import './hobby_cover.css';

const Hobby_Cover = () => {
    return (
        <section id="hobby-cover" >

            <div className="cover-image-hobby">
                <img src={`${imgcover}`} alt="cover-image-hooby" />
            </div>

            <div className="cover-text-hobby col-md-12">
                <p>DornaWing - We brings applied drone to people life!</p>
                <p>Check out our News or LinkedIn page to follow the activities!</p>
            </div>

        </section>
    );
}

export default Hobby_Cover;