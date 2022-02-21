import { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdAdd, MdDeleteForever } from 'react-icons/md';
import { RiArchiveDrawerFill } from 'react-icons/ri';
import Table_Messages from '../table_messages/Table_Messages';
import './body_messages.css';

const Body_Messages = () => {

    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 10;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
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
            `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
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

    function deleteselected() {
        const updatedMessages = [...items].filter((item) => item.completed !== true)
        setItems(updatedMessages)
    }
    return (
        <section id="messages-body">

            <div className="row m-0">
                <div className="buttons">
                    <button className="btn compose">
                        <span><MdAdd /></span> Compose
                    </button>
                    <div className="button-status">
                        <div className="icon-buttons">
                            <FaEnvelope />
                            <RiArchiveDrawerFill />
                            <MdDeleteForever onClick={deleteselected} />
                        </div>
                        <button className="dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" >
                            More
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Add To Tasks</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Add Star</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row m-0">
                <div className="table">
                    <Table_Messages
                        items={items}
                        deletemessage={deletemessage}
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </div>
            </div>
        </section>
    );
}

export default Body_Messages;