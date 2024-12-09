// How do I access the data?
// props.userData -> accessing the obj as a whole

import Post from "./Post"

// {userData} -> destructing -> I have an obj that has the userData name
export default function PostContainer({userData}){
    // When dealing with data, MOST IMPORTANT, WHAT IS IT?
    const posts = userData.posts
    console.log(posts)
    return (
        <div style={{backgroundColor: 'lightgreen', padding: '2em'}} >
            {/* MAP */}
            {posts.map(post => <Post data={post} />)}
            {/* Render one Post Component */}
            {/* < Post data={postOne[0]} /> */}
        </div>
    )

}