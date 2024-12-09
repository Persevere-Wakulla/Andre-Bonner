import { useState, useEffect, useContext } from "react";
import { useParams, Link } from 'react-router-dom';
import BlogDetails from "./BlogDetails";
import BlogLogin from "./BlogLogin";
import { BlogDataContext, UserContext } from "../../Layout/RootLayout";


export default function BlogOriginal(){
    const subscriber = useContext(UserContext);
    const subscriberBlogData = useContext(BlogDataContext)
    console.log(subscriber);
    console.log(subscriberBlogData);

    const [blog, setBlog] = useState([]);
    // console.log(blog);

    //! show modal
    const [showModal, setShowModal] = useState(false);
    const [showBlog, setShowBlog] = useState(false);
    const [oSubcriptionData, setOSubscriptionData] = useState(null);
    const [oBlogData, setOBlogData] = useState([]);
    const [localStorageData, setLocalStorageData] = useState(localStorage);
    const [visitor, setVisitor] = useState(false);

    let loading;

    // useEffect(() => {
    //     loading = true;
    //     fetch('http://localhost:5000/blog')
    //         .then(
    //             async (res) => {
    //                 console.log(res);
    //                 if (subscriber === true) {
    //                     let { count, data } = await res.json();
    //                     console.log(count);
    //                     console.log(data);
    //                     // setSubscriberBlogData([data])
    //                     console.log(subscriberBlogData);

    //                 }


    //             }
    //         )
    // }, [])

    console.log(subscriber);


    const handleLogin2 = async (e) => {
        // const data = e.target
        const data = new FormData(e.target);
        console.dir(data.get('confirm-userName'));
        console.dir(data.get('confirm-password'));
        const loginData2 = {
            userName: data.get('confirm-userName'),
            password: data.get('confirm-password'),
        };
        loading = true;

        fetch('http://localhost:5000/subscribe/login', {
            method: 'POST',
            body: JSON.stringify(loginData2),
            headers: { 'content-type': 'application/json' }
        })
            .then(

                async (res) => {
                    // *receives response.status(200 and 400) 
                    let oData = await res.json()
                    //! subscriberData
                    // console.log(oData.loggedIn);
                    // console.log(oData.blogData);
                    // console.log(oData.subscriptionData);
                    console.log(visitor);
                    console.log(localStorageData.name);

                    if (oData.loggedIn === false) {
                        // default--> false
                        setVisitor(visitor)
                        alert("Your username or password was incorrect. Please use the username and password used while registration. Please re-register if your subscription has expired. Need help go to FAQ (Frequently Asked Questions). Thank you for your service.")
                    }

                    if (oData.loggedIn === true) {
                        setVisitor(!visitor)
                        console.log(oData);
                        setOBlogData(oData.blogData)
                        setOSubscriptionData(oData.subscriptionData)
                    }
                }
            )
            .catch((error) => {
                loading = false;
                alert('an error happened. Please happened. Please Check Console')
                console.log(error)
            })
    };

    console.log(localStorageData.name);

    //! ternary the map for subscriber vs nonsubscriber...tie in blog page

    const newsMap = oBlogData.map(news => (


        <>

            <Link to={`/blogs/details/${news._id}`}
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



    return(
        <>
        <article className="c-bottomArticle">
                {
                    visitor ? (
                        <>
                            <h1 className="text-4xl">FREE NEWS ARTICLES ARE COMING SOON...</h1>
                        </>

                    ) : (
                        <>
                            <BlogLogin loginData={handleLogin2} />
                        </>
                    )

                }
                {/* {
                    !fullAccess ? (
                        <>
                            {newsMap}
                        </>
                    ) : (
                        <>
                            <BlogLogin loginData={handleLogin2} />
                        </>
                    )
                } */}
            </article>
        </>
    )
}