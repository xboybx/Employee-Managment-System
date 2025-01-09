import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        handleLogin(email, password)

        e.preventDefault()
    }

    return (
        <div className="flex items-center h-screen flex-1 flex-col bg-[#efedde] justify-center px-6 py-12 lg:px-8">
            <div className='  h-[80%] w-[30%] p-10 bg-[#f5f5f5] shadow-[4px_4px_0px_#000000] rounded-xl border-4 border-black'>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img
                        alt="Your Company"
                        src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
                        className="mx-auto h-10 w-auto text-white"
                    />
                    <br />
                    <h2 className='text-black font-bold pl-16'>Employee Managment System</h2>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                Email address
                            </label>
                            <div className="mt-2">

                                <input onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="shadow-[4px_4px_0px_#000000] block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="shadow-[4px_4px_0px_#000000] block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="border-black rounded-lg shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]
                       flex w-full justify-center bg-[#f0d508] px-3 py-1.5 text-sm/6 font-semibold text-white  hover:bg-indigo-400 focus-visible:outline  focus-visible:outline-black">

                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className=" mt-5 ">
                <h2 className="text-center text-sm font-medium text-black mb-2">Developed by Jaswanth</h2>
                <div className="flex justify-center space-x-2">
                    <a href="https://github.com/xboybx" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/jjaswanth/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login