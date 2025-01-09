// This is the Header Component and renders in the top of the website


import React, { useState } from 'react'

const Header = (props) => {
    // console.log(props.AdminUser);


    function HandleLogOut(e) {
        e.preventDefault()
        localStorage.setItem("loggedInUser", '')
        // console.log(props.changeUser);

        props.changeUser('')

    }

    return (
        <div className="flex justify-between items-center p-5 bg-[#efedde] border-2 border-black shadow-[4px_4px_0px_#000000] rounded-t-lg">
            {/* Left Side (Greeting and Username) */}
            <div className="text-xl space-y-1">
                <h1 className="font-bold text-black">Hello! <span id='wave' >👋</span></h1>
                {props.AdminUser == "admin" ? <h2 className="font-bold text-[#ff6f61]">{props.AdminUser}</h2>
                    : <h2 className="font-bold text-[#ff6f61]">{props.username}</h2>}
            </div>

            {/* Middle (Employee Management System Heading) */}
            <div className="text-2xl font-bold text-black absolute left-1/2 transform -translate-x-1/2">
                Employee Management System
            </div>

            {/* Right Side (Logout Button) */}
            <div className="mt-3 mr-2 bg-[#ff6f61] border-2 border-black p-3 rounded-lg shadow-[4px_4px_0px_#000000]">
                <button
                    onClick={(e) => {
                        HandleLogOut(e)
                    }}
                    className="text-white font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-transform focus:outline-none"
                >
                    LogOut
                </button>
            </div>
        </div>

        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-old code-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // <div className="flex justify-between items-center p-5 bg-[#efedde] border-2 border-black shadow-[4px_4px_0px_#000000] rounded-t-lg">
        //     {/* Left Side (Greeting and Username) */}
        //     <div className="text-xl space-y-1">
        //         <h1 className="font-bold text-black">Hello! <span id='wave' >👋</span></h1>
        //         {props.AdminUser == "admin" ? <h2 className="font-bold text-[#ff6f61]">{props.AdminUser}</h2>
        //             : <h2 className="font-bold text-[#ff6f61]">{props.username}</h2>}
        //     </div>

        //     {/* Right Side (Logout Button) */}
        //     <div className="mt-3 mr-2 bg-[#ff6f61] border-2 border-black p-3 rounded-lg shadow-[4px_4px_0px_#000000]">
        //         <button
        //             onClick={(e) => {
        //                 HandleLogOut(e)
        //             }}
        //             className="text-white font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-transform focus:outline-none"
        //         >
        //             LogOut
        //         </button>
        //     </div>
        // </div>




        // <div className=' flex justify-between p-5'>
        //     <div className='text-xl'>
        //         <h1>Hello! 👋</h1>
        //         <h2>{props.username}</h2>
        //     </div>
        //     <div className='mt-3 mr-2 bg-red-600 p-3 rounded-xl'>
        //         <button onClick={HandleLogOut}>LogOut</button>

        //     </div>
        // </div>
    )
}

export default Header