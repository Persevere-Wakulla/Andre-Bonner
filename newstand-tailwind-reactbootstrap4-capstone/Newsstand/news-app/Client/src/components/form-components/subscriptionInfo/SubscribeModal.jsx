import React, { useState } from "react";
import { Link } from 'react-router-dom'


const SubscribeModal = ({ onClose }) => {
    const [showPurchaseDetailsModal, setShowPurchaseDetailsModal] = useState(false);
    
    return (
        <main className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center" onClick={onClose}>
            <article
                onClick={(event) => event.stopPropagation()}
                className="w-[230px] max-w-full h-[800px] md:w-[600px] md:h-[500px] lg:w-[1000px] lg:h-[600px] bg-white text-black rounded-xl p-2 flex flex-col relative"
            >
                <header className="c-subcribeHeader">

                    <h2 className="p-2">Subscribe and read the whole story. Choose a plan below.</h2>
                    <p className="p-2">Your subscription begins on the date of purchase for the billing cycle indicated on the plan.</p>
                </header>
                <section className="c-subscribeSection p-2 m-2">
                    <h3 className="p-2">Newstand monthly subscription billing cycle: <span className="p-5">30 days</span> </h3>
                    <p className="p-2 c-subscribeSectionP">Digital news subscription allowing access to top stories, sports and more....</p>
                    <hr />
                    <div className="flex p-2 c-subscribeSectionBottom">
                        <p className="c-subscribeSectionPrice">$5.99</p>
                        <p className="p-4">Subscription + Tax</p>
                        <span className="p-4" onClick={onClose}><Link to="subscribe" className="c-selectBtn p-3 " >SELECT</Link></span>
                    </div>

                </section>
                <footer className="c-subcribeFooter text-center">
                    <span onClick={onClose}
                        className="c-cancelbtn"
                    >
                        CANCEL</span>
                </footer>
            </article>
        </main>
    )
}
export default SubscribeModal