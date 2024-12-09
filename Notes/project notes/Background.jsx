const BackgroundHistory = ({userInput}) => {
    return (
        <section><br/><br/>
            <h1>Background History</h1><br/>
        {/* first Name */}
        <div>
        <label htmlFor="fName">First Name</label><br/>
        <input onChange={userInput}  type="text" id="fName" name="fName" placeholder="Jane" required/>
        </div>
        {/* middle Name */}
        <div>
        <label htmlFor="mName">Middle Name</label><br/>
        <input onChange={userInput}  type="text" id="mName" name="mName" placeholder="linda" required/>
        </div>
        {/* last Name */}
        <div>
        <label htmlFor="lName">Last Name</label><br/>
        <input onChange={userInput}  type="text" id="lName" name="lName" placeholder="Doe" required/>
        </div>
        {/* email */}
        <div>
        <label htmlFor="email">Email</label><br/>
        <input onChange={userInput}  type="text" id="email" name="email" placeholder="janedoe@gmail.com" required/>
        </div>
        {/* address */}
        <div>
        <label htmlFor="address">Address</label><br/>
        <input onChange={userInput}  type="text" id="address" name="address" placeholder="1234 Lane Ave, Tampa, Fl" required/>
        </div>
        {/* phone */}
        <div>
        <label htmlFor="phone">Contact Number</label><br/>
        <input onChange={userInput}  type="text" id="phone" name="phone" placeholder="757-898-6969" required/>
        </div>
        </section>
    )
}
export default BackgroundHistory