import * as React from 'react';
import { useEffect, useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import Pagination from '../../../../pagination/Pagination';
import Product_List from '../product-list/Product_List';
import './products_table.css';


export const itemValue = (item) => {
    return item
};
export const idValue = (id) => {
    return id
};

const Product_Table = ({
    items,
    setItems,
    editProduct,
    productEditing,
    setProductEditing,
    editingName,
    setEditingName,
    editingPrice,
    setEditingPrice,
    editingQty,
    setEditingQty,
    editingImage,
    setEditingImage,
    toggleComplete
}) => {

    const [searchItem, setSearchItem] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 13;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
        };

        getComments();
    }, []);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setItems(commentsFormServer);
    };

    const deleteProduct = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };


    return (
        <>

            <div className="row m-0">
                <div className="search-box-products">
                    <span className="las la-search"></span>
                    <input type="search" placeholder="search here ..." onChange={(e) => setSearchItem(e.target.value)} data={items} />
                </div>
                <div className="box-table-products table-responsive-sm" >
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Name</th>
                                <th className="th-price-table" >Price</th>
                                <th className="th-qty-table">Qty</th>
                                <th className="th-date-table" >DATE CREATED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.filter((item) => {
                                if (searchItem == "") {
                                    return item
                                } else if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                                    return item
                                }
                            }).map((item, index) => {
                                return (
                                    

                                    <tr key={item.id} id={item.id} >
                                        <td className="check-table">
                                            <div className="check-box">
                                                <input class="form-check-input"
                                                    type="checkbox"
                                                    value="" id="flexCheckDefault"
                                                    onChange={() => toggleComplete(item.id)}
                                                    checked={item.completed}
                                                />
                                                <label class="form-check-label" for="flexCheckDefault">

                                                </label>
                                            </div>
                                        </td>
                                        <td className="id-table" >
                                            <div className="box-id">
                                                {item.id}
                                            </div>
                                        </td>
                                        <td className="productname-table" scope="row">
                                            <div className="box-productname">
                                                {productEditing === item.id ?
                                                    (<input
                                                        type="file"
                                                        onChange={(e) => setEditingImage(e.target.value)}
                                                        value={editingImage}
                                                    />)
                                                    :
                                                    (<><img src={item.image} alt="" /></>)
                                                }

                                                {productEditing === item.id ?
                                                    (<input
                                                        type="text"
                                                        onChange={(e) => setEditingName(e.target.value)}
                                                        value={editingName}
                                                    />)
                                                    :
                                                    (<>{item.name}</>)
                                                }

                                            </div>
                                        </td>
                                        <td className="price-table">
                                            <div className="price-box">
                                                $
                                                {productEditing === item.id ?
                                                    (<input
                                                        type="text"
                                                        onChange={(e) => setEditingPrice(e.target.value)}
                                                        value={editingPrice}
                                                    />)
                                                    :
                                                    (<>{item.price}</>)
                                                }

                                            </div>
                                        </td>
                                        <td className="qty-table">
                                            <div className="qty-box">
                                                <span></span>
                                                {productEditing === item.id ?
                                                    (<input
                                                        type="text"
                                                        onChange={(e) => setEditingQty(e.target.value)}
                                                        value={editingQty}
                                                    />)
                                                    :
                                                    (<>{item.qty}</>)
                                                }

                                            </div>
                                        </td>
                                        <td className="date-table">
                                            <div className="box-date">2021-11-11</div>
                                        </td>
                                        <td className="delete-table">
                                            <div className="box-delete">
                                                {productEditing === item.id ?
                                                    (<div className="edit-btns">
                                                        <button className="btn sub-btn" onClick={() => editProduct(item.id)}>Submit</button>
                                                        <button className="btn cancel-btn" onClick={() => editProduct([...items])}>Cancel</button>
                                                    </div>)
                                                    :
                                                    (<button className="btn edit-btn" onClick={() => setProductEditing(item.id)}><MdModeEdit /></button>)
                                                }
                                                <button className="btn delete-btn" onClick={() => deleteProduct(item.id)} >Delete</button>
                                            </div>
                                        </td>
                                        <td className="more-table">
                                            <div className="more-box">
                                                <button className="btn">
                                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" role="button" aria-expanded="false" style={{ padding: 0, margin: 0 }}>
                                                        View
                                                    </a>
                                                    <div class="dropdown-menu product-single" aria-labelledby="navbarDropdown">
                                                        <Product_List
                                                            items={items}
                                                            item={item}
                                                        />
                                                    </div>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                );
                            })}
                        </tbody>
                    </table>
                    <div className="pagination-table">
                        <Pagination
                            pageCount={pageCount}
                            handlePageClick={handlePageClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product_Table;