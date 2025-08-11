import Logo from '../../assets/images/logo/logo.png'
import React, { useState } from 'react'
const Login = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

const submitForm = () => {

}

    return (
        <div className="flex  flex-col justify-center items-center h-full py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-10 w-auto"
      src={Logo}
      alt="Your Company"
    />
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign In To Quera Employe Management
    </h2>
  </div>
  <div className="rounded-md bg-red-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-red-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">
          Username Or Password Is Invalid
        </h3>
      </div>
    </div>
  </div>
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="Username"
            className="block text-sm font-medium leading-6 text-gray-900 undefined"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              id="Username"
              name="Username"
              type="text"
              autoComplete="current-password"
              className="px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
              defaultValue=""
              onChange={e => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 undefined"
          >
            password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
              defaultValue=""
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#0099CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
      <div></div>
    </div>
  </div>
</div>

    )
}

export default Login