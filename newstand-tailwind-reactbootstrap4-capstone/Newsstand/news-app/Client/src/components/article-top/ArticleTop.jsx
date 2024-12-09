import { useState, useEffect } from "react";
import { useNavigate, NavLink } from 'react-router-dom'
import LoginForm from "../form-components/Login-Form/LoginFormReactBootstrap";
import SubscribeModal from "../form-components/subscriptionInfo/SubscribeModal";
export default function ArticleTop({ admin, myUser, handleLogin, handleLogout, handleChecked, checked, handleUsername, handlePassword, password, username }) {

    const [hamburger, setHamburger] = useState(true);

    const [nav, setNav] = useState(false)

    const navigate = useNavigate();

    //! show modal
    const [showModal, setShowModal] = useState(false);


    //! date
    const today = new Date();
    // let loading;
    function formatDate(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }

    console.log(admin);
    
    console.log(myUser);

    return (
        <article className="c-topArticle">
            {/* LOG-IN */}
            {
                myUser ? (
                    <>
                        <header className="c-header c-flex pb-32 p-8 w-screen">
                            {/* //! Hamburger button/anonymous-function= setNav( state=nav(true) ... to see nav in mobile view) */}
                            {hamburger &&
                                <img onClick={() => setNav(!nav)} src="src\personal-assets\Images\icon-hamburger.svg" alt="icon" className="ham-image" />
                            }
                            {/* nav/click hamburger icon to see in mobile */}
                            <h6>Newsstand</h6>

                        </header>
                        <section className="c-subscribeSect c-flex p-8 w-screen">
                            <p className="c-subscribeP">Please click the blog link (📰) to read the latest news, stay up to date with the current stories around the world.</p>

                        </section>
                    </>
                ) : (
                    <>
                        <section className="c-header ">
                            {/* //! Hamburger button/anonymous-function= setNav( state=nav(true) ... to see nav in mobile view) */}
                            <div className="c-flex c-header">

                                {hamburger &&
                                    <img onClick={() => setNav(!nav)} src="/src/personal-assets/Images/icon-hamburger.svg" alt="icon" className="ham-image" />
                                }
                                <h6>Newsstand</h6>
                            </div>

                            <div className="text-white c-flex">
                                {/* //* handleLogin function */}
                                <LoginForm
                                    loginData={handleLogin} checked={checked} handleChecked={handleChecked}
                                    username={username}
                                    password={password}
                                    handleUsername={handleUsername}
                                    handlePassword={handlePassword} />

                            </div>
                        </section>
                        <section className="c-subscribeSect p-2 m-0 md:flex justify-around ">
                            <p className="c-subscribeP p-1 text-2xl">Read the latest news, stay up to date with the current stories around the world</p>
                            <div className="c-subscribe-BtnSect">
                                <button
                                    onClick={() => setShowModal(true)} className="c-subscribeBtn">
                                    Subscribe
                                </button>
                            </div>
                            {showModal && (
                                <SubscribeModal onClose={() => setShowModal(false)} />
                            )}
                        </section>
                    </>
                )
            }
        {
            //   admin ? (
            //     nav &&
            //         <aside className="nav-links h-screen  md:flex md:w-screen md:justify-between md:h-1/3"
            //             onPointerLeave={() => setNav(!nav)}
            //         >


            //             <div className="p-5 text-center text-blue-900 text-xl">
            //                 <p> {formatDate(today)}</p>
            //             </div>
            //             <div className="text-xl md:flex p-5 md:w-full md:justify-evenly" >

            //                 <NavLink to='/' >🏡</NavLink><br />
            //                 {/* //! subscription */}
            //                 {/* <NavLink to='about'>ℹ️</NavLink><br /> */}
            //                 {/* //! contactpost */}
            //                 <NavLink to='admin'>🫅🏽</NavLink><br />
            //                 {/* //! blog */}
            //                 {/* <NavLink to='blogs'>📰</NavLink><br /> */}
            //                 <NavLink to='/'
            //                     onClick={handleLogout}>LOGOUT
            //                 </NavLink><br />

            //                 <NavLink onClick={() => setNav(!nav)} className="navcloseBtn md:p-0">❌ </NavLink>
            //             </div>

            //         </aside>
            //   ):(

                // nav &&
                //     <aside className="nav-links h-screen  md:flex md:w-screen md:justify-between md:h-1/3"
                //         onPointerLeave={() => setNav(!nav)}
                //     >


                //         <div className="p-5 text-center text-blue-900 text-xl">
                //             <p> {formatDate(today)}</p>
                //         </div>
                //         <div className="text-xl md:flex p-5 md:w-full md:justify-evenly" >

                //             <NavLink to='/' >🏡</NavLink><br />
                //             <NavLink to='about'>ℹ️</NavLink><br />
                //             <NavLink to='help'>🆘</NavLink><br />
                //             <NavLink to='blogs'>📰</NavLink><br />
                //             <NavLink to='/'
                //                 onClick={handleLogout}>LOGOUT
                //             </NavLink><br />

                //             <NavLink onClick={() => setNav(!nav)} className="navcloseBtn md:p-0">❌ </NavLink>
                //         </div>

                //     </aside>
            //   )  
            }
            {
                myUser ? (
                    nav &&
                    <aside className="nav-links h-screen  md:flex md:w-screen md:justify-between md:h-1/3"
                        onPointerLeave={() => setNav(!nav)}
                    >


                        <div className="p-5 text-center text-blue-900 text-xl">
                            <p> {formatDate(today)}</p>
                        </div>
                        <div className="text-xl md:flex p-5 md:w-full md:justify-evenly" >

                            <NavLink to='/' >🏡</NavLink><br />
                            <NavLink to='about'>ℹ️</NavLink><br />
                            <NavLink to='help'>🆘</NavLink><br />
                            <NavLink to='blogs'>📰</NavLink><br />
                            <NavLink to='/'
                                onClick={handleLogout}>LOGOUT
                            </NavLink><br />

                            <NavLink onClick={() => setNav(!nav)} className="navcloseBtn md:p-0">❌ </NavLink>
                        </div>

                    </aside>

                ) : (
                    nav &&
                    <aside className="nav-links h-screen md:flex md:w-full md:h-1/3 md:justify-between"
                        onPointerLeave={() => setNav(!nav)}>
                        <div className="p-5 text-blue-900 text-xl">
                            <p> {formatDate(today)}</p>
                        </div>
                        <div className="text-xl  text-black h-1/3 md:flex p-5  ">
                            <NavLink to='/' className="md:m-3">Home</NavLink><br />
                            <NavLink to='about' className="md:m-3">About</NavLink><br />
                            <NavLink to='help' className="md:m-3">Help</NavLink><br />
                            <NavLink to='g-blogs' className="md:m-3">Blogs</NavLink><br />
                        </div>
                        <span onClick={() => setNav(!nav)} className="p-1 navcloseBtn md:p-5">❌</span>

                    </aside>


                )}
        </article >
    )

}