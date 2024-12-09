import React from "react";
import {Link} from 'react-router-dom'
const PurchaseDetails = () => {
    return (
        <main className="mt-[36rem]">
            <header className="c-purchaseDetailsHeader text-2xl">
                <h4 className="text-2xl font-bold">Purchase Details</h4>
            </header>
            <section>
                <div className="">
                    <span className="c-amount flex">AMOUNT</span>
                </div>
                
                <div className="p-5 flex c-priceSectDiv">
                    <p>Newsstand Monthly Subscription</p>
                    <span>$4.99</span>
                </div>
                <div className="p-5 flex c-priceSectDiv">
                    <p>Content Delivery</p>
                    <span>$1.00</span>
                </div>
                <div className="p-5 flex c-priceSectDiv">
                    <p>Tax</p>
                    <span>$0.00</span>
                </div><hr />
                <div className="p-5 flex c-priceSectDiv">
                    <p>Total</p>
                    <span>$5.99</span>
                </div><hr />
                <div className="p-5 flex c-priceSectDiv text-red-800">
                    <p>Thank you for subscribing, your order will be processed within 72 hours. Your confirmation will be sent to your email account submitted on the form. </p>
                    {/* <span className="">$5.93</span> */}
                </div><hr />
            </section>
            <footer className="c-subcribeFooter text-center">
                    <span
                        className="c-cancelbtn"
                    >
                      <Link to="/">Continue</Link></span>
                </footer>
        </main>
    )
}
export default PurchaseDetails