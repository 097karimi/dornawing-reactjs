import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import Item_Body_News from './Item_Body_News';
import './body_newsroom.css';

const Body_Newsroom = () => {

    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 6;

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

    return (
        <section id="body-news">

            <div className="row news-box">
                {items.map((item) => {
                    return (
                        <Item_Body_News />
                    );
                })}
            </div>

            <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />

        </section >
    );
}

export default Body_Newsroom;