import Header_Dashboard from "../header_dashboard/Header_Dashboard";
import Chart from "../chart/Chart";
import './home_dashboard.css';

const Home_Dashboard = () => {
    return ( 
        <section id="home-dashboard">
            <Header_Dashboard />
            <Chart />
        </section>
     );
}
 
export default Home_Dashboard;