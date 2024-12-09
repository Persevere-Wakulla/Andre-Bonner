import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ArticleTop from "../components/article-top/ArticleTop";
import { useLocalStorage } from "../localStorageNewsApp";

export const UserContext = createContext(null);
export const BlogDataContext = createContext(null)
const RootLayout = () => {
    const [admin, setAdmin] = useState(false)
    const [subscriber, setSubscriber] = useState(false);
    const [oSubcriptionData, setOSubscriptionData] = useState(null);
    const [oBlogData, setOBlogData] = useState(null);
    
    const [username2, setUsername2] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";

    });
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(username2));
    }, [username2]);
    const [password2, setPassword2] = useState(() => {
        const saved = localStorage.getItem("name2");
        const initialValue = JSON.parse(saved);
        return initialValue || "";

    });
    useEffect(() => {
        localStorage.setItem("name2", JSON.stringify(password2));
    }, [password2]);
    const [checked, setChecked] = useLocalStorage("checked", false);

    let loading;
    const handleLogin = async (e) => {
        // const data = e.target
        const data = new FormData(e.target);
        console.dir(data.get('userName'));
        console.dir(data.get('password'));
        const loginData = {
            userName: data.get('userName'),
            password: data.get('password'),
        };

        loading = true;
        
        fetch('http://localhost:5000/subscribe/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: { 'content-type': 'application/json' }
        })
            .then(

                async (res) => {
                    // *receives response.status(200 and 400) 
                    let oData = await res.json()
                    //! subscriberData
                    console.log(oData.loggedIn);
                    console.log(oData.blogData);
                    console.log(oData.subscriptionData.userName);

                    console.log(oData.subscriptionData.password);
                    console.log("admin",oData.subscriptionData.admin);
                    if(oData.subscriptionData.admin === true){
                        setAdmin(!admin)
                    }
                    if (oData.loggedIn === false) {
                        setSubscriber(subscriber)
                        alert("Your username or password was incorrect. Please use the username and password used while registration. Please re-register if your subscription has expired. Need help go to FAQ (Frequently Asked Questions). Thank you for your service.")
                    }

                    if (oData.loggedIn === true) {
                        setSubscriber(!subscriber)
                        setOBlogData(oData.blogData)
                        setOSubscriptionData(oData.subscriptionData)
                    }
                    if (checked === false) {
                        // if remember me is not checked there is no local storage
                        localStorage.clear()
                    }
                }
            )
            .catch((error) => {
                loading = false;
                alert('an error happened. Please happened. Please Check Console')
                console.log(error)
            })

    };

    //? passed as props to LoginFormReactBootstrap
    const handleUsername = (e) => {
        setUsername2(e.target.value.toLowerCase())
    }

    const handlePassword = (e) => {
        setPassword2(e.target.value.toLowerCase())
    }

    const handleChecked = (e) => {
        setChecked(e.target.checked)
        if (e.target.checked === true) {
            setUsername2(username2)
            setPassword2(password2)
        }
        else {
            setUsername2("")
            setPassword2("")
        }
    }
    function handleLogout(e) {
        setUsername2(e.target.value = "")
        setPassword2(e.target.value = "")
        localStorage.clear()
        setSubscriber(!data)
    }
    console.log(subscriber);
    console.log(admin)
    return (
        <main className="root-layout w-screen" id="root-top">
            {/* MAIN FUNCTIONALITY-no createContext/useContext */}
            <ArticleTop
                admin={admin}
                myUser={subscriber}
                handleLogin={handleLogin}
                username={username2}
                password={password2}
                checked={checked}
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                handleChecked={handleChecked}
                handleLogout={handleLogout}
            />
            <div className='triangleContainer'>

                <a href='#' id='root-top' className='triangle'><img src="\src\personal-assets\icons\doubleTriangle.png" alt="double-triangle" className='doubletriangle' />
                </a>
            </div>
            <article className="c-bottomArticle">
                <UserContext.Provider value={subscriber}>
                    <BlogDataContext.Provider value={oBlogData}>
                    <Outlet />
                    </BlogDataContext.Provider>
                </UserContext.Provider>
            </article>

        </main >


    )
}
export default RootLayout