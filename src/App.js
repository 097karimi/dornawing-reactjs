import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hobby from "./components/hobby/Hobby";
import Home from "./components/home/Home";
import Applications from "./components/applications/Applications";
import Product_App from "./components/applications/product_app/Product_App";
import Newsroom from "./components/newsroom/Newsroom";
import Support from "./components/support/Support";
import Panel_Admin_Two from "./components/panel_admin_new/Panel_Admin_Two";
import Messages from "./components/panel_admin_new/pages/messages/Messages";
import Users from "./components/panel_admin_new/pages/users/Users";
import Single_User from "./components/panel_admin_new/pages/users/Single_User";
import Single_Message from "./components/panel_admin_new/pages/messages/single_message/Single_Message";
import Products from "./components/panel_admin_new/pages/products/Products";
import Contexts from "./contexts";
import Login from "./components/login/Login";
import './app.css';

function App() {

  return (
    <div className="app">
      <Contexts>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/hobby' element={<Hobby />} exact />
          <Route path='/applications' element={<Applications />} exact />
          <Route path='/applications/product' element={<Product_App />} exact />
          <Route path='/newsroom' element={<Newsroom />} exact />
          <Route path='/support' element={<Support />} exact />

          <Route path='/panel-admin' element={<Panel_Admin_Two />} exact />
          <Route path='/panel-admin/messages' element={<Messages />} exact />
          <Route path='/panel-admin/users' element={<Users />} exact />
          <Route path='/panel-admin/single-user' element={<Single_User />} exact />
          <Route path='/panel-admin/messages/single-message/:id' element={<Single_Message />} exact />
          <Route path='/panel-admin/products' element={<Products />} exact />
          <Route path='/login' element={<Login />} exact />
        </Routes>
      </Contexts>
    </div>
  );
}

export default App;
