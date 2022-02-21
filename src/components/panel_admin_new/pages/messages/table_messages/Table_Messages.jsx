import * as React from 'react';
import Pagination from '../../../../pagination/Pagination';
import user from '../../../assets/img/avatar-2.jpg';
import './table_messages.css';
import Single_Message from '../single_message/Single_Message';

const Table_Messages = ({ items, deletemessage, handlePageClick, pageCount }) => {

    return (
        <>
            <div className="row m-0">
                <div className="box-table table-responsive-md" >
                    <table class="table table-hover">
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => {
                                return (
                                    <tr key={item.id} id={item.id}>
                                        <td className="check-table">
                                            <div className="check-box">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">

                                                </label>
                                            </div>
                                        </td>
                                        <a href={`/panel-admin/messages/single-message/${item.id}`} className="body-tr" >
                                        <td className="user-table" scope="row" onClick={ <Single_Message item={item} /> }>
                                            <div className="box-user">
                                                <img src={user} alt="" /> {item.name}
                                            </div>
                                        </td>
                                        <td className="message-table">
                                            <div className="box-message">
                                                {item.body}
                                            </div>
                                        </td>
                                        <td className="btn-table">
                                            <div className="box-status" >
                                                <span>10:23</span>
                                            </div>
                                        </td>

                                        <td className="more-table">
                                            <div className="box-more">
                                                <button className="btn more-btn" >more..</button>
                                            </div>
                                        </td>
                                        </a>
                                        <td className="delete-table">
                                            <div className="box-delete">
                                                <button className="btn delete-btn" onClick={() => deletemessage(item.id)} >Delete</button>
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

export default Table_Messages;