import bgvideo from '../../assets/videos/bgvideo.mp4';
import imgcover from '../../assets/img/back.jpg';
import '../../assets/styles/cover.css';


const Cover = () => {
    return (
        <section id="cover" >

            <div className="cover-video">
                <video src={`${bgvideo}`} id="herovideo"
                    playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%" height="100%">
                    <source type="video/mp4" src={`${bgvideo}`}></source>
                </video>
                <img src={`${imgcover}`} alt="cover-image" />
            </div>

            <div className="cover-text col-md-12">
                <p>DornaWing - We brings applied drone to people life!</p>
                <p>Check out our News or LinkedIn page to follow the activities!</p>
            </div>
            
        </section>
    );
}

export default Cover;