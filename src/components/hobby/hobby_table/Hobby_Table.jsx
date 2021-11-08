import product3 from '../../../assets/img/best-3.jpg';
import product4 from '../../../assets/img/product_8.jpg';
import '../../../assets/styles/hobby/hobby_table.css';

const Hobby_Table = () => {
    return (
        <section id="hobby-table">
            <div className="container">
                <div className="row hobby-title">
                    <h4>Hobby Applications</h4>
                </div>

                <div className="row hobby-app-box">

                    <h4>AGRAS T20</h4>
                    <div class="col-lg-6">
                        <div className="best-hobby-applicatins">
                            <div className="card-hobby-box">
                                <div class="card img-box-hobby">
                                    <img src={product3} class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div className="best-hobby-applicatins">
                            <div className="card-hobby-box">
                                <div class="card img-box-hobby">
                                    <img src={product4} class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row hobby-table-box">
                    <div className="col-lg-4 col-md-6">
                        <div className="hobby-app-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Range</th>
                                    </tr>
                                    <tr>
                                        <td><span>75 km</span> with 5 kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="hobby-app-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Payload</th>
                                    </tr>
                                    <tr>
                                        <td>Up to <span>6 kg</span> total payload, max. 5 kg with triple drop</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="hobby-app-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Speed</th>
                                    </tr>
                                    <tr>
                                        <td><span>100 km/h</span> in default cruise speed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="hobby-app-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Awareness</th>
                                    </tr>
                                    <tr>
                                        <td>ADS-B in, FLARM, Remote ID</td>
                                        <td>ADS-B in, FLARM, Remote ID</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="hobby-app-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Wind Resistance</th>
                                    </tr>
                                    <tr>
                                        <td><span>15 m/s</span> average, 20 m/s gusts</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="hobby-app-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">Telemetry</th>
                                    </tr>
                                    <tr>
                                        <td>Cellular 3G/4G/5G</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="hobby-app-download">
                    <button className="btn hobby-download" >Download full spec sheet</button>
                </div>

            </div>
        </section>
    );
}

export default Hobby_Table;