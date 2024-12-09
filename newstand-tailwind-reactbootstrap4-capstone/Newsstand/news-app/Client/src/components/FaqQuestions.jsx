import { Link } from 'react-router-dom'


export default function FaqQuestions() {
    return(
        <article className="faq p-4">
            <h3 className="pb-2 font-bold text-2xl">Frequently Asked Questions</h3>
            <section className="question">
            <p><strong>How can i send feedback?</strong></p>
            <p>Go to our help/contact page, send yor email and message and we will try to get back to you soon with a response from our research and development team.</p>
            </section>
            
            <section className="question">
            <p><strong>What was the most difficult parts of this application in the development stage?</strong></p>
            <p>The most difficult part was separating the free articles from the subscribed, connecting the remember me to the local-storage, security related to user data, and with limited time adding more creativity and using SSR.</p>
            </section>
            
            <section className="question">
            <p><strong>Why is there a delay in deployment?</strong></p>
            <p>The owner/senior-developer of the application due to legal obligations won't be available to deploy the site until 2026.</p>
            </section>
            
            <section className="question">
            <p><strong>Why isn't there much CSS?</strong></p>
            <p>The site was originally designed according to another site by the same name. Most of the CSS was created with <Link to='tailwindui.com'>Tailwind UI</Link> </p>
            </section>
            
            <section className="question">
            <p><strong>Why doesn't the Log-Out Button have an icon also?</strong></p>
            <p>Orignally the site used a logout icon, there was confusion in differentiation of what the buttons did based on user experience. Maybe in the future we will re-deploy the Log-Out icon and more.</p>
            </section>
            
            <section className="question">
            <p><strong>Why arent there sections of diffrent categories of news like the original app?</strong></p>
            <p>This feature will be created and deployed before 2026.</p>
            </section>
        </article>
    )
}