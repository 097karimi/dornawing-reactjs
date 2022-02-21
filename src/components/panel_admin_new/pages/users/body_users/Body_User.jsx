import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { RiArchiveDrawerFill } from 'react-icons/ri';
import Table_Users from '../table_users/Table_Users';
import './body_users.css';

const Body_Users = () => {
    
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    return (
        <section id="body-user">

            <div className="row m-0">
                <div className="buttons">
                    <div className="button-status">
                        <div className="icon-buttons">
                            <FaEnvelope />
                            <RiArchiveDrawerFill alt="archive" />
                            <MdDeleteForever />
                        </div>
                        <button className="dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" >
                            More
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Edit User</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Add User</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row m-0">
                <div className="table">
                    <Table_Users 
                        pagination={{
                            currnet:page,
                            pageSize:pageSize,
                            total: 500,
                            onChange:(page,pageSize) => {
                                setPage(page);
                                setPageSize(pageSize)
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Body_Users;