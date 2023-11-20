import ArrowLeft from 'icons/ArrowLeft'
import React, { ReactNode, useState } from 'react'

const InitialPage = () => {
  const [loginState, setLoginState] = useState('landing-page')
  let test: ReactNode = null
  {
    loginState === 'landing-page'
      ? (test = (
          <div className="centered-full">
            <h1 className="heading mb-8">Welcome, doctor!</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
              onClick={() => setLoginState('sign-in')}
            >
              Log In
            </button>
          </div>
        ))
      : null
  }
  {
    loginState === 'sign-in'
      ? (test = (
          <div className="centered-full">
            <form>
              <input
                placeholder="Your registered email"
                type="email"
                name="email"
                id="email"
                className="w-full"
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                className="w-full"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                onClick={() => setLoginState('landing-page')}
              >
                Submit
              </button>
            </form>
          </div>
        ))
      : null
  }
  return test
}

export default InitialPage
