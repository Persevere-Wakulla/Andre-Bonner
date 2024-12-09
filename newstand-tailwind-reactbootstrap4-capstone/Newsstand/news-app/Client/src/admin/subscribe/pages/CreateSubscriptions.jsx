import React, { useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useNavigate, Form, useSubmit } from 'react-router-dom'

const CreateSubscriptions = () => {
    const navigate = useNavigate();
    let submit = useSubmit()


    const [subscriber, setSubscriber] = useState({
        fName: '',
        mName: '',
        lName: '',
        email: '',
        address: '',
        phone: '',
        accountNumber: '',
        currency: '',
        cardType: '',
        nickname: '',
        petNickname: '',
        favFood: '',
        favColor: '',
        changedName: '',
        gmaMiddleName: '',
        songName: '',
        userName: '',
        password: '',
    })
    // console.log(subscriber);

    // const [fName, setFName] = useState('');
    // const [mName, setMName] = useState('');
    // const [lName, setLName] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [phone, setPhone] = useState('');
    // const [accountNumber, setAccountNumber] = useState('');
    // const [currency, setCurrency] = useState('');
    // const [cardType, setCardType] = useState('');
    // const [nickname, setNickname] = useState('');
    // const [petNickname, setPetNickname] = useState('');
    // const [favFood, setFavFood] = useState('');
    // const [favColor, setFavColor] = useState('');
    // const [favCelebrity, setFavCelebrity] = useState('');
    // const [changedName, setChangedName] = useState('');
    // const [gmaMiddleName, setGmaMiddleName] = useState('');
    // const [songName, setSongName] = useState('');
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');

    //place in variable instead of state to keep from rerendering another time
    let loading;

    const handleSaveSubscription = async (e) => {
        // e.preventDefault()
        // console.log(`e`, e);
        // if (subscriber){
        // console.log(subscriber);
        const data = new FormData(e.target)
            const subscriberData = {

                 fName: data.get("fName"),
                 mName: data.get("mName"),
                 lName: data.get("lName"),
                 email: data.get("email"),
                 address: data.get("address"),
                 phone: data.get("phone"),
                 accountNumber: formData.get("accountNumber"),
                 currency: data.get("currency"),
                 cardType: data.get("cardType"),
                 nickname: data.get("nickname"),
                 petNickname: data.get("petNickname"),
                 favFood: data.get("favFood"),
                 favColor: data.get("favColor"),
                 favCelebrity: data.get("favCelebrity"),
                 changedName: data.get("changedName"),
                 gmaMiddleName: data.get("gmaMiddleName"),
                 songName: data.get("songName"),
                 userName: data.get("userName"),
                 password: data.get("password")
            
        }
        // console.log(`data`, data);
       
        loading = true;
        fetch('http://localhost:5000/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscriberData),
            headers: { 'content-type': 'application/json' }
        })
            .then(
                async () => {
                    loading = false;
                    navigate('/')
                    // console.log(subscriber)
                })
            .catch((error) => {
                loading = false;
                alert('an error happened. Please happened. Please Check Console')
                console.log(error)
            })
    }

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Subscription</h1>
            {loading ? <Spinner /> : ''}
            <Form 
            onSubmit={handleSaveSubscription}
            className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">First Name</label>
                    <input type="text"
                        value={subscriber.fName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="fName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Middle Name</label>
                    <input type="text"
                        value={subscriber.mName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="mName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Last Name</label>
                    <input type="text"
                        value={subscriber.lName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="lName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Email</label>
                    <input type="text"
                        value={subscriber.email}
                        onChange={(e) => submit(e.currentTarget)}
                        name="email"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Address</label>
                    <input type="text"
                        value={subscriber.address}
                        onChange={(e) => submit(e.currentTarget)}
                        name="address"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Phone</label>
                    <input type="number"
                        value={subscriber.phone}
                        onChange={(e) => submit(e.currentTarget)}
                        name="phone"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Account Number</label>
                    <input type="number"
                        value={subscriber.accountNumber}
                        onChange={(e) => submit(e.currentTarget)}
                        name="accountNumber"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Currency</label>
                    <input type="text"
                        value={subscriber.currency}
                        onChange={(e) => submit(e.currentTarget)}
                        name="currency"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Card Type</label>
                    <input type="text"
                        value={subscriber.cardType}
                        onChange={(e) => submit(e.currentTarget)}
                        name="cardType"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Nickname</label>
                    <input type="text"
                        value={subscriber.nickname}
                        onChange={(e) => submit(e.currentTarget)}
                        name="nickname"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Pet Nickname</label>
                    <input type="text"
                        value={subscriber.petNickname}
                        onChange={(e) => submit(e.currentTarget)}
                        name="petNickname"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Favorite Food</label>
                    <input type="text"
                        value={subscriber.favFood}
                        onChange={(e) => submit(e.currentTarget)}
                        name="favFood"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Favorite Color</label>
                    <input type="text"
                        value={subscriber.favColor}
                        onChange={(e) => submit(e.currentTarget)}
                        name="favColor"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                {/* <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Favorite Celebrity</label>
                    <input type="text"
                        value={subscriber.favCelebrity}
                        onChange={(e) => setSubscriber(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div> */}
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Changed Name</label>
                    <input type="text"
                        value={subscriber.changedName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="changedName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Grandmother's Middle Name</label>
                    <input type="text"
                        value={subscriber.gmaMiddleName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="gmaMiddleName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Song Name</label>
                    <input type="text"
                        value={subscriber.songName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="songName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Username</label>
                    <input type="text"
                        value={subscriber.userName}
                        onChange={(e) => submit(e.currentTarget)}
                        name="userName"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Password</label>
                    <input type="text"
                        value={subscriber.password}
                        onChange={(e) => submit(e.currentTarget)}
                        name="password"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                {/* <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Created At</label>
                    <input type="text"
                        value={createdAt}
                        onChange={(e) => setCreatedAt(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Updated At</label>
                    <input type="text"
                        value={updatedAt}
                        onChange={(e) => setUpdatedAt(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div> */}
                <button className="p-2 bg-sky-300 m-8" 
                value="Submit"
                type="submit"
                >
                    Save
                </button>
            </Form>
        </div>
    )
}
export default CreateSubscriptions