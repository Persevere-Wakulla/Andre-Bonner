import { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import BlogDetails from "./BlogDetails";
import { BlogDataContext, UserContext } from "../../layout/RootLayout";
import VisitorBlogDetails from "./g-blogs/VisitorBlogDetails";

export default function Blog() {
    const subscriber = useContext(UserContext);
    const subscriberBlogData = useContext(BlogDataContext)
    
    //! show modal
    // const [showModal, setShowModal] = useState(false);
    const [showBlog, setShowBlog] = useState(false);    
    const [localStorageData, setLocalStorageData] = useState(localStorage);
    const [visitorData, setVisitorData] = useState([]);
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
                    setVisitorData(oData.data)
                    loading = false
                }
            )
            .catch((error) => {
                loading = false
                alert('An error happened. Please happened. Please Check Console');
                console.log(error)
            })
    }, [])
    console.log(visitorData);
    console.log(subscriber);
    console.log(localStorageData.name);
    //! ternary the map for subscriber vs nonsubscriber...tie in blog page
    const visitorsNewsMap = visitorData.map(news => (
        <>
            <Link to={`/blogs/visitordetails/${news._id}`}
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
    const newsMap = subscriberBlogData.map(news => (
        <>

            <Link to={`/blogs/${news._id}`}
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
                        <BlogDetails onClose={() => setShowBlog(false)} />
                    )}
                </section>
            </Link>

        </>
    ))
    return (
        <>
            <header className="md:text-center">
                <h1 className="text-2xl">Current news from the last three days can be read now only for subscribers here...</h1>
            </header>
            <article className="c-bottomArticle">

                {
                    !subscriber ? (
                        <>
                            {visitorsNewsMap}
                        </>

                    ) : (
                        <>
                            {newsMap}
                        </>
                    )

                }

            </article>
        </>
    )
}