import * as React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '../../../../pagination/Pagination';
import user from '../../../assets/img/avatar-2.jpg';
import './table_users.css';
import Single_User from '../Single_User';


const Table_Users = () => {

    const [searchItem, setSearchItem] = useState([]);

    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 6;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            setItems(data);
        };

        getComments();
    }, [limit]);

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

    const deletemessage = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <>

            <div className="row m-0">
                <div className="search-box-users">
                    <span className="las la-search"></span>
                    <input type="search" placeholder="search here ..." onChange={(e) => setSearchItem(e.target.value)} data={items} />
                </div>
                <div className="box-table-users table-responsive-sm" >
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>UserName</th>
                                <th className="th-email-table" >Email</th>
                                <th className="status-table">Phone</th>
                                <th className="date-table" >DATE CREATED</th>
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
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">

                                                </label>
                                                {/* <BsStar /> */}
                                            </div>
                                        </td>
                                        <td className="id-table" >
                                            <div className="box-id">
                                                {item.id}
                                            </div>
                                        </td>
                                        <td className="username-table" scope="row">
                                            <div className="box-username">
                                                <img src={user} alt="" /> {item.name}
                                            </div>
                                        </td>
                                        <td className="email-table">
                                            <div className="email-box">
                                                {item.email}
                                            </div>
                                        </td>
                                        <td className="status-table">
                                            <div className="status-box">
                                                <span></span> +989123456789
                                            </div>
                                        </td>
                                        <td className="date-table">
                                            <div className="box-date">2021-11-11</div>
                                        </td>
                                        <td className="delete-table">
                                            <div className="box-delete">
                                                <button className="btn delete-btn" onClick={() => deletemessage(item.id)} >Delete</button>
                                            </div>
                                        </td>
                                        <td className="more-table">
                                            <div className="more-box">
                                                <button className="btn">
                                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" role="button" aria-expanded="false" style={{ padding: 0, margin: 0 }}>
                                                        more...
                                                    </a>
                                                    <div class="dropdown-menu user-single" aria-labelledby="navbarDropdown">
                                                        <Single_User
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

export default Table_Users;