import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export default function GuestBlogs() {
    const [visitorData, setVisitorData] = useState([]);
    const [showBlog, setShowBlog] = useState(false);
    let loading;

    useEffect(() => {
        loading = true;
        fetch('http://localhost:5000/visitorsblog')
            .then(
                async (res) => {
                    console.log(res);
                    let oData = await res.json();


                    console.log(oData.count);
                    console.log(oData.data);
                    // setOBlogData(data)
                    if (oData.data) {

                        setVisitorData(oData.data)
                    }

                }
            )
    }, [])
    console.log(visitorData);
    const visitorsNewsMap = visitorData.map(news => (
        <>
            <Link to={`/g-blogs/${news._id}`}
                className="blog-links w-screen ">
                <section key={news._id} className="c-blogsect flex m-1" onClick={() => setShowBlog(true)}>
                    <img src="/src/personal-assets/Images/goodimg/fox.png" alt="fox" width={'70px'} />
                    <div className="">
                        <h4 className="c-newsTitle">{news.title}</h4>
                        <div className="c-blogP c-flex">
                            <p>{news.author}</p>
                            <p>{news.occupation}</p>
                            <p>{news.formattedCreatedAt}</p>
                        </div>
                    </div>
                    {showBlog && (
                        <VisitorBlogDetails onClose={() => setShowBlog(false)} />
                    )}
                </section>
            </Link>
        </>
    ))


    return (
        <>
            <article className="c-bottomArticle">
                      {visitorsNewsMap}                               
            </article>

        </>
    )
}