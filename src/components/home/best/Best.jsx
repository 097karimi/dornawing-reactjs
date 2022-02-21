import Best_Item from './Best_Item';
import './best.css';

const Best = () => {

    return (
        <section id="best">
            <div className="row product-box">
                <Best_Item />
                <Best_Item />
            </div>
        </section>
    );
}

export default Best;