import { Link, useRouteError } from 'react-router-dom'

export default function BlogError() {
    const error = useRouteError()
        return(
        //css
        <section className='blog-error'>
            <h2>ERROR</h2>
            <p>{error.message}</p>
            <Link to='/'>Back to the Homepage</Link>
            
        </section>
    )
}