import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskList_Admin = () => {



    const tailwindColors = [
        'bg-red-400',
        'bg-orange-400',
        'bg-yellow-400',
        'bg-green-400',
        'bg-teal-400',
        'bg-blue-400',
        'bg-cyan-400',
        'bg-purple-400',
        'bg-pink-400',
        'bg-indigo-400',
        'bg-violet-400',


    ];

    function getRandomColor() {
        return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
    }

    const [userData, setUserData] = useContext(AuthContext)
    // console.log(userData);

    return (

        <div
            id="AdminTaskList"
            className=" p-10 border-2 bg-[#efedde] border-black shadow-[4px_4px_0px_#000000] rounded-b-lg"
        >
            {/* Header Section */}
            <div className="bg-black flex justify-between text-lg font-semibold rounded-lg p-3 mb-2 border-2 shadow-[4px_4px_0px_#000000]">
                <h2 className="text-white w-1/5">Employee</h2>
                <h3 className="text-white w-1/5">New Task</h3>
                <h3 className="text-white w-1/5">Active</h3>
                <h3 className="text-white w-1/5">Completed</h3>
                <h3 className="text-white w-1/5">Failed</h3>
            </div>

            {/* Employee Task Cards */}
            {userData.map((taskCard, i) => {
                return (
                    <div
                        key={i}
                        className={`${getRandomColor()} flex justify-between text-lg font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-[4px_4px_0px_#000000]`}
                    >
                        <h2 className="w-1/5 text-black">{taskCard.firstName}</h2>
                        <h3 className="w-1/5 text-black">{taskCard.taskCounts.newTask}</h3>
                        <h3 className="w-1/5 text-black">{taskCard.taskCounts.active}</h3>
                        <h3 className="w-1/5 text-black">{taskCard.taskCounts.completed}</h3>
                        <h3 className="w-1/5 text-black">{taskCard.taskCounts.failed}</h3>
                    </div>
                );
            })}
        </div>

        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-Old Code-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


        //   <div id="AdminTaskList" className=' h-80 p-10 overflow-y-scroll'>

        //             <div className='bg-purple-600 flex justify-between text-lg  font-semibold rounded-lg p-3 mb-2'>
        //                 <h2>Employee</h2>
        //                 <h3>NewTask</h3>
        //                 <h3>Active</h3>
        //                 <h3>Completed</h3>
        //                 <h3>Failed</h3>
        //             </div>



        //             {data.employees.map((taskCard, i) => {
        //                 return <div key={i} className={`${getRandomColor()} flex  justify-between text-lg  py-2 px-4 font-semibold rounded-lg p-3 mb-2`}>
        //                     <h2 className="w-1/5">{taskCard.firstName}</h2>
        //                     <h3 className="w-1/5">{taskCard.taskCounts.newTask}</h3>
        //                     <h3 className="w-1/5">{taskCard.taskCounts.active}</h3>
        //                     <h3 className="w-1/5">{taskCard.taskCounts.completed}</h3>
        //                     <h3 className="w-1/5">{taskCard.taskCounts.failed}</h3>
        //                 </div>
        //             })}

        //     ........................................code below not need bcoz of map() used.......................................
        //             <div className='bg-purple-600 flex justify-between text-lg font-semibold rounded-lg p-3 mb-2'>
        //                 <h2>UserName</h2>
        //                 <h3>taskName</h3>
        //                 <h3>Status</h3>
        //             </div>

        //             <div className='bg-green-600 flex justify-between text-lg font-semibold rounded-lg p-3 mb-2'>
        //                 <h2>UserName</h2>
        //                 <h3>taskName</h3>
        //                 <h3>Status</h3>
        //             </div>


        //             <div className='bg-blue-600 flex justify-between text-lg font-semibold rounded-lg p-3 mb-2'>
        //                 <h2>UserName</h2>
        //                 <h3>taskName</h3>
        //                 <h3>Status</h3>
        //             </div>

        //             <div className='bg-yellow-600 flex justify-between text-lg font-semibold rounded-lg p-3 mb-2'>
        //                 <h2>UserName</h2>
        //                 <h3>taskName</h3>
        //                 <h3>Status</h3>
        //             </div>

        //             <div className='bg-red-600 flex justify-between text-lg font-semibold rounded-lg p-3 mb-2'>
        //                 <h2>UserName</h2>
        //                 <h3>taskName</h3>
        //                 <h3>Status</h3>
        //             </div>


        //         </div >
    )
}

export default TaskList_Admin