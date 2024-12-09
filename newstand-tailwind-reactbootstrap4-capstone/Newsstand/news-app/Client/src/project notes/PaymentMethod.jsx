const PaymentMethod = ({userInput}) => {
    return (
        <section>
            <h1>Payment Method</h1><br />
            <div>
                <label htmlFor="accountNumber">Account Number</label><br />
                <input onChange={userInput} type="text" id="accountNumber" name="accountNumber" placeholder="012345678910111213" required/>
            </div>
            <div>
                <label htmlFor="currency">Currency</label><br />
                <input onChange={userInput} type="text" id="currency" name="currency" placeholder="U.S. Dollar" required/>
            </div>
            <div>
                <label htmlFor="cardType">Card / Account Type</label><br />
                <input onChange={userInput} type="text" id="cardType" name="cardType" placeholder="Credit" required/>
            </div>
        </section>
    )
}
export default PaymentMethod