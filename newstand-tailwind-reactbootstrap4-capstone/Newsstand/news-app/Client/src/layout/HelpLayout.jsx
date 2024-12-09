import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
    return (
        <section className="help-layout" id='help-top'>
            <div className='p-4'>
                <h2 className='pb-5 font-bold text-2xl'>Website Help</h2>
                <p>Please read the our frequently asked questions(FAQ) and/or contact us with your email and message feedback.</p>

            </div>
            <nav className='p-4'>
                <NavLink to="faq" className='font-bold text-xl hover:w-1/2 sm:hover:w-1/2 md:hover:w-1/3'>View the FAQ</NavLink>
                <br /><br />
                <NavLink to="contact" className='font-bold text-xl hover:w-1/2 sm:hover:w-1/2 md:hover:w-1/4'>Contact Us</NavLink>
            </nav>
            <br />
            <Outlet />
        </section>
    )
}