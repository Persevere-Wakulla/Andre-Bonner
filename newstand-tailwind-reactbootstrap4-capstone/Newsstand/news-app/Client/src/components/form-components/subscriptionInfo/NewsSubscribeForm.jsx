import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import PurchaseDetails from "./PurchaseDetails";
//todo: form... add components of form...post on mongodb compass
const SubscribeForm = () => {
    const [submit, setSubmit] = useState(false);
    const [reset, setReset] = useState(false);
    const [fName, setFName] = useState('');
    const [mName, setMName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [currency, setCurrency] = useState('');
    const [cardType, setCardType] = useState('');
    const [nickname, setNickname] = useState('');
    const [petNickname, setPetNickname] = useState('');
    const [favFood, setFavFood] = useState('');
    const [favColor, setFavColor] = useState('');
    const [favCelebrity, setFavCelebrity] = useState('');
    const [changedName, setChangedName] = useState('');
    const [gmaMiddleName, setGmaMiddleName] = useState('');
    const [songName, setSongName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //! show modal
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSaveSubscription = e => {
        e.preventDefault();
        const data = {
            fName,
            mName,
            lName,
            email,
            address,
            phone,
            accountNumber,
            currency,
            cardType,
            nickname,
            petNickname,
            favFood,
            favColor,
            favCelebrity,
            changedName,
            gmaMiddleName,
            songName,
            userName,
            password,
        };
        setLoading(true)
        fetch('http://localhost:5000/subscribe', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
            .then(
                 async (res) => {
                    setLoading(false)
                    console.dir(res)
                    let data = await res.json()
                    // console.log(`res`, res.status, data);
                    if(res.status === 200 ){
                        navigate('/purchaseSuccessful')
                    }
                    if (res.status === 400) {
                        alert('Did not complete subscription, please try again, thank you for your service.')
                    }
                })
            .catch((error) => {
                setLoading(false)
                alert('an error happened. Please happened. Please Check Console')
                console.log(error)
            })
                

            
    }
    // console.log(handleSaveSubscription);


    return (

        <main className="mt-[32rem]">
            <div style={{ textAlign: "center" }}>

                <section className="p-3 "><br /><br />
                    <h1 className="font-bold text-2xl">Background History</h1><br />
                    {/* first Name */}
                    <div>
                        <label htmlFor="fName" className="font-bold">First Name</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setFName(e.target.value)} value={fName} type="text" id="fName" name="fName" placeholder="Jane" required />
                    </div><br />
                    {/* middle Name */}
                    <div>
                        <label htmlFor="mName" className="font-bold">Middle Name</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setMName(e.target.value)} value={mName} type="text" id="mName" name="mName" placeholder="linda" required />
                    </div><br />
                    {/* last Name */}
                    <div>
                        <label htmlFor="lName" className="font-bold">Last Name</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setLName(e.target.value)} value={lName} type="text" id="lName" name="lName" placeholder="Doe" required />
                    </div><br />
                    {/* email */}
                    <div>
                        <label htmlFor="email" className="font-bold">Email</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" name="email" placeholder="janedoe@gmail.com" required />
                    </div><br />
                    {/* address */}
                    <div>
                        <label htmlFor="address" className="font-bold">Address</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setAddress(e.target.value)} value={address} type="text" id="address" name="address" placeholder="1234 Lane Ave, Martha's Vineyard, Mass." required />
                    </div><br />
                    {/* phone */}
                    <div>
                        <label htmlFor="phone" className="font-bold">Contact Number</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setPhone(e.target.value)} value={phone} type="text" id="phone" name="phone" placeholder="757-898-6969" required />
                    </div><br />
                </section>

                <section className="p-3">
                    <h1 className="text-xl bg-green-700">Payment Method</h1><br />
                    <div>
                        <label htmlFor="accountNumber" className="font-bold">Account Number</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setAccountNumber(e.target.value)} value={accountNumber} type="text" id="accountNumber" name="accountNumber" placeholder="012345678910111213" required />
                    </div><br />
                    <div>
                        <label htmlFor="currency" className="font-bold">Currency</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setCurrency(e.target.value)} value={currency} type="text" id="currency" name="currency" placeholder="bitcoin" required />
                    </div><br />
                    <div>
                        <label htmlFor="cardType" className="font-bold">Card / Account Type</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setCardType(e.target.value)} value={cardType} type="text" id="cardType" name="cardType" placeholder="Credit" required />
                    </div><br />
                </section>

                <section className="p-3">
                    <h1 className="text-xl font-bold bg-red-600">Security Questions</h1>

                    {/* Your nickname? */}
                    <div>
                        <label htmlFor="nickname" className="font-bold">Your nickname?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setNickname(e.target.value)} value={nickname} type="text" id="nickname" name="nickname" placeholder="jd" required />
                    </div><br />
                    {/* What's your family's pet nickname? */}
                    <div>
                        <label htmlFor="petNickname" className="font-bold">What's your family's pet nickname?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setPetNickname(e.target.value)} value={petNickname} type="text" id="petNickname" name="petNickname" placeholder="Max" required />
                    </div><br />
                    {/* What's your favorite food? */}
                    <div>
                        <label htmlFor="favFood" className="font-bold">What's your favorite food?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setFavFood(e.target.value)} value={favFood} type="text" id="favFood" name="favFood" placeholder="chicken" required />
                    </div><br />
                    {/* What's your favorite color? */}
                    <div>
                        <label htmlFor="favColor" className="font-bold">What's your favorite color?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setFavColor(e.target.value)} value={favColor} type="text" id="favColor" name="favColor" placeholder="grey" required />
                    </div><br />
                    {/* What's your favorite childhood celebrity? */}
                    {/* <div>
                        <label htmlFor="favCelebrity" className="font-bold">What's your favorite childhood celebrity?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setFavCelebrity(e.target.value)} value={favCelebrity} type="text" id="favCelebrity" name="favCelebrity" placeholder="Michael Jackson" required />
                    </div><br /> */}
                    {/* What you would change your name to if you would? */}
                    <div>
                        <label htmlFor="changedName" className="font-bold">What you would change your name to if you would?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setChangedName(e.target.value)} value={changedName} type="text" id="changedName" name="changedName" placeholder="janet doe" required />
                    </div><br />
                    {/* Grandmother's middle name? */}
                    <div>
                        <label htmlFor="gmaMiddleName" className="font-bold">Grandmother's middle name?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setGmaMiddleName(e.target.value)} value={gmaMiddleName} type="text" id="gmaMiddleName" name="gmaMiddleName" placeholder="Nana" required />
                    </div><br />
                    {/* Your favorite all-time song-name? */}
                    <div>
                        <label htmlFor="songName" className="font-bold">Your favorite all-time song-name?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setSongName(e.target.value)} value={songName} type="text" id="songName" name="songName" placeholder="Love" required />
                    </div><br />
                    {/* Your username? */}
                    <div>
                        <label htmlFor="userName" className="font-bold">Your username?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setUserName(e.target.value)} value={userName} type="text" id="sUserName" name="sUserName" placeholder="jdoe" required />
                    </div><br />
                    {/* Your password? */}
                    <div>
                        <label htmlFor="password" className="font-bold">Your password?</label><br />
                        <input className="border-black border text-center p-1" onChange={(e) => setPassword(e.target.value)} value={password} type="text" id="sPassword" name="sPassword" placeholder="jdoe123" required />
                    </div><br />
                </section>

                
                <footer>
                <button
                    type="button"
                    onClick={handleSaveSubscription}
                    className="c-formSubmit p-1 m-5"
                >SUBMIT
                </button>

                </footer>

            </div>

        </main>

    )
}
export default SubscribeForm