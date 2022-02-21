import React from 'react';
import Dashboard_Navbar from "../../components/dashboard_navbar/Dashboard_Navbar";
import Body_Products from './body_products/Body_Products';
import './products.css';

const Products = () => {
    return (
        <section id="products">
             <Dashboard_Navbar />
            <div id="body-products">
                <Body_Products />
            </div>
        </section>
    );
}

export default Products;