
import '../../../assets/styles/applications/body_app/body_app.css';
import { useEffect, useState } from 'react';
import Pagination from '../../pagination/Pagination';
import Item_Body_App from './Item_Body_App';


const Body_Applications = () => {

    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 6;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                // `http://localhost:3004/comments?_page=1&_limit=${limit}`
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setItems(data);
        };

        getComments();
    }, [limit]);



    const fetchComments = async (currentPage) => {
        const res = await fetch(
            // `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
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
        // scroll to the top
        //window.scrollTo(0, 0)
    };

    return (
        <section id="body-app">
            <div className="container" >
                <div className="row applications-title">
                    <h4>Applications</h4>
                </div>

                <div className="row applicatins-box">
                    {items.map((item) => {
                        return (
                            <Item_Body_App />
                        );
                    })}
                </div>
            </div>

            <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />

        </section >
    );
}

export default Body_Applications;