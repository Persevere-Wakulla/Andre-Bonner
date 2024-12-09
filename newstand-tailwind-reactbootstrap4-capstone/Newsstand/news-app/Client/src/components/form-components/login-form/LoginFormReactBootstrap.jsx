
import { useState, useEffect } from "react"
import { Form } from "react-router-dom"
//destructure to see data...so you dont have to use the word props
export default function LoginForm({ loginData, checked, handleChecked, username, password, handleUsername, handlePassword }) {
  


  //! post data to the back...
  return (
    // rb4-form-login
    <div className="col-md-6 m-auto">
      {/* //! SEE ROOTLAYOUT-FETCH */}
      <Form
        id="login"
        onSubmit={loginData}
        className="p-2"
      >
        <div className="form-group">
          <label htmlFor="userName">Username</label><br />
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            name="userName"
            className="username-title text-black form-control" id="userName"
            aria-describedby="userNameHelp"
            placeholder="Enter Username"
          /><br />

          <small
            id="userNameHelp"
            className="form-text text-muted text-yellow-500">
            User-Name that you have used while registration.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            name="password"
            className="password-title form-control text-black"
            id="password"
            placeholder="Password"
            autoComplete="password" />
        </div>
        <div className="form-check">

          <input
            type="checkbox"
            name="checkbox"
            checked={checked}
            onChange={handleChecked}
            className="form-check-input"
            id="remember"
          />

          <label
            className="form-check-label"
            htmlFor="remember">
            Remember me
          </label>
        </div>
        <button
          value="Submit"
          type="submit"
          className="btn btn-primary  bg-white text-blue-800 login-btn p-2 m-5 rounded-md">
          Login
        </button>
      </Form>
    </div>
  )
}
