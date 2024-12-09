import { useState, useEffect } from "react";
import GuestBlogsBackButton from "../../../components/GuestBlogsBackButton";
import { useParams } from 'react-router-dom';

export default function VisitorBlogDetails() {
    const [blog, setBlog] = useState({})
    const { id } = useParams();
    let loading;
    useEffect(() => {
        loading = true;
        fetch(`http://localhost:5000/visitorsblog/${id}`)
            .then(
                async (res) => {
                    console.log(res);
                    let data = await res.json();
                    console.log(data);
                    setBlog(data);
                    loading = false;
                }
            )
            .catch((error) => {
                console.log(error);
                loading = false;
            })
    }, [])


    return (
        <main >
            <header className="p-5">
                <GuestBlogsBackButton />
            </header>
            <article className="lg:p-40">
                <section className="p-5 lg:w-1/2 lg:m-auto">
                    {/* default image //! "/src/personal-assets/Images/goodimg/fox.png" alt="fox"*/}
                    <img src={blog.image} alt="image" width={'100%'} />
                </section>
                <section className="w-screen text-center p-0">
                    <h1 className="c-newsTitle text-4xl text-center">{blog.title}</h1>
                    {/* //?RB4-LOREM-BIG */}
                    <div className="pt-10 text-left indent-5">
                        <p>{blog.blogInfo}</p>
                    </div>
                </section>
                <section className="c-blogP pt-2 w-screen flex pr-8 justify-evenly font-semibold ">
                    <p className="">{blog.author}</p>
                    <p>{blog.occupation}</p>
                    <p>{blog.email}</p>
                    <p>{blog.publishYear}</p>
                </section>
            </article>
        </main >
    )
}