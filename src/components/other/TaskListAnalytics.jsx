//This is the component which appers when the user is logged in and shows his tasks analytics boxes

import React from 'react'

const TaskListAnalytics = (props) => {
    return (

        <div className="flex justify-between  flex-wrap bg-[#efedde]  h-500px gap-9 h-[245px] p-3 pt-8">
            {/* New Task */}
            <div className="bg-[#d1b3ff] border-2 border-black shadow-[4px_4px_0px_#000000] w-[20%] h-40 rounded-lg p-6">
                <h1 className="text-3xl font-bold text-black">{props.analytics.newTask}</h1>
                <h3 className="text-xl font-semibold text-[#6a1b9a]">New Task</h3>
            </div>

            {/* Completed Task */}
            <div className="bg-[#bbffb3] border-2 border-black shadow-[4px_4px_0px_#000000] w-[20%] h-40 rounded-lg p-6">
                <h1 className="text-3xl font-bold text-black">{props.analytics.completed}</h1>
                <h3 className="text-xl font-semibold text-[#388e3c]">Completed Task</h3>
            </div>

            {/* Accepted Task */}
            <div className="bg-[#b3e5fc] border-2 border-black shadow-[4px_4px_0px_#000000] w-[20%] h-40 rounded-lg p-6">
                <h1 className="text-3xl font-bold text-black">{props.analytics.active}</h1>
                <h3 className="text-xl font-semibold text-[#1565c0]">Accepted Task</h3>
            </div>

            {/* Failed Task */}
            <div className="bg-[#fff9b3] border-2 border-black shadow-[4px_4px_0px_#000000] w-[20%] h-40 rounded-lg p-6">
                <h1 className="text-3xl font-bold text-black">{props.analytics.failed}</h1>
                <h3 className="text-xl font-semibold text-[#f57f17]">Failed Task</h3>
            </div>
        </div>



        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-Old Code-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


        // <div className='flex justify-between gap-9 mt-10 p-3'>
        //     <div className='bg-purple-400 w-[50%] h-40 rounded-xl p-11'>
        //         <h1 className='text-2xl font-semibold'>{props.analytics.newTask}</h1>
        //         <h3 className='text-xl font-medium '>New Task</h3>
        //     </div>

        //     <div className='bg-green-400 w-[45%] h-40 rounded-xl p-11'>
        //         <h1 className='text-2xl font-semibold'>{props.analytics.completed}</h1>
        //         <h3 className='text-xl font-medium '>Completed Task</h3>
        //     </div>

        //     <div className='bg-blue-400 w-[45%] h-40 rounded-xl p-11'>
        //         <h1 className='text-2xl font-semibold'>{props.analytics.active}</h1>
        //         <h3 className='text-xl font-medium '>Accepted Task</h3>
        //     </div>


        //     <div className='bg-yellow-400 w-[45%] h-40 rounded-xl p-11'>
        //         <h1 className='text-2xl font-semibold'>{props.analytics.failed}</h1>
        //         <h3 className='text-xl font-medium '>Failed Task</h3>
        //     </div>
        // </div>
    )

}

export default TaskListAnalytics