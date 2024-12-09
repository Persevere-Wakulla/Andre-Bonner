import { Form } from "react-router-dom"

export default function BlogLogin({ loginData }) {
    return (
        <div className="col-md-6 m-auto  bg-blue-700 text-center p-16 text-white ">
            <h1 className="text-2xl p-4 text-yellow-400">To see the blogs please confirm username and password please</h1>
            {/* //! SEE ROOTLAYOUT-FETCH */}
            <Form id="confirm-login" onSubmit={loginData}>
                <div className="form-group">
                    <label htmlFor="confirm-userName">Confirm Username</label><br />
                    <input type="text" name="confirm-userName" className="username-title text-black form-control" id="confirm-userName" aria-describedby="userNameHelp" placeholder="Enter Username"
                    autoComplete="username" /><br />
                    <small id="userNameHelp" className="form-text text-muted text-red-500">
                        User-Name that you have used while registration.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label><br />
                    <input type="password" name="confirm-password" className="password-title form-control text-black " id="confirm-password" placeholder="confirm-password"
                    autoComplete="current-password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" name="confirm-checkbox" className="form-check-input" id="confirm-remember" />
                    <label className="form-check-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary float-right bg-white text-blue-800 login-btn p-2 m-2">
                    Submit
                </button>
            </Form>
        </div>
    )
}