
export default function Post({data}){
    console.log(data)

    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <span>🥵{data.reactions.dislikes} </span>
            <span>👌{data.reactions.likes}</span>
        </div>
    )
}