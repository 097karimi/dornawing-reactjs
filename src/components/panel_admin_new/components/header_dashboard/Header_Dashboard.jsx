import * as React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import './header-dashboard.css';

export default function Header_Dashboard() {

    return (
        <section id="header-dashboard">
            {/* <div className="container"> */}
            <div className="row m-0">
                <div className="col-lg-3 col-md-6">
                    <div className="box-data">
                        <div className="number">
                            <h5>54</h5>
                            <span>Customers</span>
                        </div>
                        <div className="icon">
                            <FaUsers />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box-data">
                        <div className="number">
                            <h5>219</h5>
                            <span>Orders</span>
                        </div>
                        <div className="icon">
                            <GiShoppingBag />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box-data">
                        <div className="number">
                            <h5>24</h5>
                            <span>Products</span>
                        </div>
                        <div className="icon">
                        <FaIcons.FaCartPlus />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box-data">
                        <div className="number">
                            <h5>$9k</h5>
                            <span>Income</span>
                        </div>
                        <div className="icon">
                            <AiFillDollarCircle />
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}
