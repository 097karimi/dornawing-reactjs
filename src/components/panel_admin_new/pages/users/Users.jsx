import Dashboard_Navbar from "../../components/dashboard_navbar/Dashboard_Navbar";
import Boady_User from "./body_users/Body_User";
import './users.css';

const Users = () => {
    return ( 
        <section id="users">
             <Dashboard_Navbar />
            <div id="body-users">
                <Boady_User />
            </div>
        </section>
     );
}
 
export default Users;