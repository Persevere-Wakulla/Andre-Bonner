import { useEffect, useState } from 'react';
import PostContainer from './PostContainer';
// ?USE EFFECT!
export default function UserPost() {
  const [userId, setUserId] = useState(1); //initial state
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  // Search for a different user
  // Grab their Posts (they may more than one)
  // Display

  // !Components UserPost -> holds our input so the user can search, Fetch user data (search) 1 Get data -> 2 send to container ->3 map ->4 send our post
  // ! PostContainer -> Hold the posts and data we fetch
  // !Post -> Render what a post should look like based off what the container sends down

  // What end point am I fetching from?

  // dependency -> when something changes I will run my function (component lifecycle)
  // We want something to happen when our component Life cycle triggers
  useEffect(() => {
    // Mount/updating
    // Fetching
    async function fetchUser() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/users/${userId}/posts`);
        const data = await res.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchUser();

    // Unmounting
    return () => {};
  }, [userId]);
  // How can I search for a user (track what the user is inputting)?
  // track our input (e.target.value)
  // Keep track of a state
  console.log(userData);
  return (
    <div style={{ backgroundColor: 'lightcoral', padding: '1em' }}>
      <h1>Enter a user id</h1>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="userSearch"
        type="text"
        name=""
        id=""
      />
      <button className="userSubmit">Submit</button>
      {/* Other Components */}
      {/* What is a prop? property  attaching a property (name:values) to our Object*/}
      {/* Component is really just an object */}
      {/* We want to make sure that our data is complete before we sent into our component */}

      {!loading && <PostContainer userData={userData} />}
    </div>
  );
}
