export default function Dish(props){
    // Turn a string into arr
    // uuid
    const ingredients = props.data.ingredients.split(', ')
    // console.log(ingredients)
    // map through those items
    const li = ingredients.map((item,index) => {
        // If looping and rendering an elemenet dont forget the key prop
        return <li key={index}>{item}</li>
    })


    return (
        <section>
            <h2>{props.data.name}</h2>
            <span>{props.data.category}</span> <span>{props.data.price}</span>
            <p>{props.data.description}</p>
            <ul>
                {li}
            </ul>
        </section>
    )
}