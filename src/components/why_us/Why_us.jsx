import { IoStarOutline } from 'react-icons/io5';
import '../../assets/styles/why_us.css';

const Why_Us = () => {
    return (
        <section id="why-us">
            <div className="container marketing">
                <div className="row test-title">
                    <h4>Why Us?</h4>
                    <hr />
                </div>
                <div class="row boxs">
                    <div class="col-lg-4">
                        <div id="star-box">
                            <IoStarOutline />
                        </div>
                        <h2>Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <div id="star-box">
                            <IoStarOutline />
                        </div>
                        <h2>Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <div id="star-box">
                            <IoStarOutline />
                        </div>
                        <h2>Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Why_Us;