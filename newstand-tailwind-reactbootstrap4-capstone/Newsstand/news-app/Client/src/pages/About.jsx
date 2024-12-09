import {Link} from 'react-router-dom'

export default function About() {
    return (
        <section className="c-about h-screen" id="about-top">
            <h1 className=" about-title text-2xl font-bold p-5 text-center">ABOUT US</h1>
            <p className="about-paragraph p-5 text-2xl">Created in 2024, the site is currently under the process of being developed and will be deployed in 2026.To contact or give feedback to the devoloper go to our <Link to='/help/contact'>contact page</Link> or visit abonner@perseverefire, abonner@indeed.com, abonner@slack.com, therealabonner@facebook.com, therealabonner@twitter.com.</p>                        
        </section>
    )
}