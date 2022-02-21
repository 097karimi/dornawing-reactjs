import "./chart.css";
import { Line } from "react-chartjs-2";
import New_Customer from "../new_customer/New_Customer";


export default function Chart() {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: "Sales Value",
                data: ['1', '1.3', '1.7', '1.2', '1.4', '2', '1.6'],
                backgroundColor: '#fff',
                borderColor: 'rgb(20, 7, 75)',
                hoverBackgroundColor: '#f00',
            },
        ],
    }

    // const option = {
    //     maintainAspectRatio: false,
    // }

    return (
        <div id="chart">
            <div className="row m-0">
                <div className="col-lg-9">
                    <div className="chart-sales">
                        <div className="chart-title">
                            <h5>Sales Value</h5>
                            <span className="cash" >$10,567</span>
                            <p>Yesterday <span className="percent" >+10.5%</span></p>
                        </div>
                        <Line data={data} borderColor="rgb(20, 7, 75)" />
                    </div>
                </div>

                <div className="col-lg-3 m-0">
                    <New_Customer />
                </div>
            </div>
        </div>
    );
}
