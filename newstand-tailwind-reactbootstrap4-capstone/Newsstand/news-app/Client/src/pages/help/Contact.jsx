import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
    let loading;
    const handleSavePost = (e) => {
        e.preventDefault()
        console.log(e.target[0].value);

        const postData = {
            email: e.target[0].value,
            message: e.target[1].value,
        };
        if (postData.message.length < 10) {
            alert('Message must be over 10 characters long please... Thank you for service')
        }
        if (postData.message.length >= 10) {
            loading = true;
            fetch('http://localhost:5000/contact-post', {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: { 'content-type': 'application/json' }
            })
                .then(
                    () => {
                        loading = false;
                        navigate('/')
                    })
                .catch((error) => {
                    loading = false;
                    alert('an error happened. Please happened. Please Check Console')
                    console.log(error)
                })

        }
    }

    return (
        <section className='contact'>

            <Form
                method='post'
                onSubmit={handleSavePost}
                className='p-2'
            >

                <label htmlFor="email">
                    <span className='text-xl '>Your Email:</span>
                    <br />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className='outline-rose-600 mb-4'
                        required />
                </label><br />

                <label htmlFor="message">
                    <span className='text-xl'>Your Message:</span>
                    <br />
                    <textarea
                        name="message"
                        id="message"
                        className='mb-4'
                        required></textarea>
                </label><br />
                <button className='contact-btn p-2 text-white' type="submit">SUBMIT</button>


            </Form>

        </section>
    )
}

