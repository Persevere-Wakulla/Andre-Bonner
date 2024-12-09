import React, { useState, useEffect } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useNavigate, useParams } from 'react-router-dom'

const EditSubscriptions = () => {
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
    // const [createdAt, setCreatedAt] = useState('');
    // const [updatedAt, setUpdatedAt] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/subscribe/${id}`)
            .then(async (res) => {
                console.log(res);
                //! when dealing with multiple properties...destructure!!
                let data = await res.json()
                console.log(data);
                setFName(data.fName);
                setMName(data.mName);
                setLName(data.lName);
                setEmail(data.email);
                setAddress(data.address);
                setPhone(data.phone);
                setAccountNumber(data.accountNumber);
                setCurrency(data.currency);
                setCardType(data.cardType);
                setNickname(data.nickname);
                setPetNickname(data.petNickname);
                setFavFood(data.favFood);
                setFavColor(data.favColor);
                setFavCelebrity(data.favCelebrity);
                setChangedName(data.changedName);
                setGmaMiddleName(data.gmaMiddleName);
                setSongName(data.songName);
                setUserName(data.userName);
                setPassword(data.password);
                setLoading(false);

            }).catch((error) => {
                setLoading(false);
                alert('An error happened. Please happened. Please Check Console');
                console.log(error)
            })
    }, [])
    const handleEditSubscription = () => {
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
        setLoading(true);
        fetch(`http://localhost:5000/subscribe/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
            .then(
                () => {
                    setLoading(false);
                    navigate('/')
                })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please happened. Please Check Console');
                console.log(error)
            })
    }
    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Edit Subscription</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">First Name</label>
                    <input type="text"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Middle Name</label>
                    <input type="text"
                        value={mName}
                        onChange={(e) => setMName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Last Name</label>
                    <input type="text"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Email</label>
                    <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Address</label>
                    <input type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Phone</label>
                    <input type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Account Number</label>
                    <input type="number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Currency</label>
                    <input type="text"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Card Type</label>
                    <input type="text"
                        value={cardType}
                        onChange={(e) => setCardType(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Nickname</label>
                    <input type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Pet Nickname</label>
                    <input type="text"
                        value={petNickname}
                        onChange={(e) => setPetNickname(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Favorite Food</label>
                    <input type="text"
                        value={favFood}
                        onChange={(e) => setFavFood(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Favorite Color</label>
                    <input type="text"
                        value={favColor}
                        onChange={(e) => setFavColor(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Changed Name</label>
                    <input type="text"
                        value={changedName}
                        onChange={(e) => setChangedName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Grandmother's Middle Name</label>
                    <input type="text"
                        value={gmaMiddleName}
                        onChange={(e) => setGmaMiddleName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Song Name</label>
                    <input type="text"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Username</label>
                    <input type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Password</label>
                    <input type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditSubscription}>
                    Save
                </button>
            </div>
        </div>
    )
}
export default EditSubscriptions