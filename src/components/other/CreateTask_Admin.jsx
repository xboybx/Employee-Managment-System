//This is the component rendered when admin is logeed in and is used to assign taks bt filling all details by user

import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask_Admin = () => {


    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const [newTasks, setNewTasks] = useState({}) //an object to push all the states to localstorage

    function submitCreatetask(e) {
        e.preventDefault()
        const newTaskObject = {
            taskTitle, taskDate, category, taskDescription, active: false,
            newTask: true,
            completed: false,
            failed: false,
        }


        setNewTasks(newTaskObject)
        const existingData = JSON.parse(localStorage.getItem("employees")) || [];
        const data = existingData.length > 0 ? existingData : userData;

        let userFound = false;//

        data.forEach((e) => {
            if (e.firstName == assignTo) {
                e.tasks.push(newTaskObject)
                e.taskCounts.newTask = e.taskCounts.newTask + 1
                e.taskCounts.active = e.taskCounts.active + 1

                console.log(e);
                userFound = true;//
            }

        }) // this code pushes the new tasks to the users tasks object and reflects in cardlist data ehwn user loggin's

        if (!userFound) {
            alert("User  not found");
        }

        //  the line to store the updated data in local storage
        localStorage.setItem("employees", JSON.stringify(data));

        setUserData(data); //this saves the new task created in userData variable not in localstorage if any refresh all new tasks are gone



    }




    return (


        <div className="w-full p-8  border-2 bg-[#efedde]  border-black shadow-[4px_4px_0px_#000000] ">

            <form onSubmit={(e) => {
                submitCreatetask(e)
            }} className="grid grid-cols-2 gap-6">
                {/* Left Side Fields */}
                <div className="space-y-6">
                    {/* Task Title */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">Task Title</h3>

                        <input onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }}

                            type="text"
                            placeholder="Task Title"
                            value={taskTitle}
                            className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
                        />

                    </div>

                    {/* Date */}
                    <div>
                        <h2 className="text-lg font-bold text-black mb-2">Date</h2>

                        <input onChange={(e) => {
                            setTaskDate(e.target.value)
                        }}
                            value={taskDate}
                            type="date"
                            className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
                        />
                    </div>

                    {/* Assign To */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">Assign To</h3>

                        <input onChange={(e) => {
                            setAssignTo(e.target.value)
                        }}
                            value={assignTo}
                            type="text"
                            placeholder="Employee Name"
                            className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">Category</h3>

                        <input onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                            value={category}
                            type="text"
                            placeholder="Dev, Design, etc"
                            className="w-full px-4 py-2 bg-white text-black border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
                        />
                    </div>
                </div>

                {/* Right Side Field (Description) */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-black mb-2">Task Description</h3>

                        <textarea onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                            value={taskDescription}
                            className="w-full h-48 px-4 py-2 bg-white text-black border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] focus:outline-none focus:ring-2 focus:ring-[#ff6f61]"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#ff6f61] text-white border-2 border-black rounded-lg shadow-[4px_4px_0px_#000000] font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-[#ff6f61] transition-transform"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-old code-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // <div>
        //     <div>

        //         <div className="w-full p-8  shadow-lg">

        //             <form className="grid grid-cols-2 gap-6">
        //                 {/* <!-- Left Side Fields --> */}
        //                 <div className="space-y-6">
        //                     {/* <!-- Task Title --> */}
        //                     <div>
        //                         <h3 className="text-lg font-semibold mb-2">Task Title</h3>
        //                         <input type="text" placeholder="Task Title" className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                     </div>

        //                     {/* <!-- Date --> */}
        //                     <div>
        //                         <h2 className="text-lg font-semibold mb-2">Date</h2>
        //                         <input type="date" className="w-full px-4 py-2 border rounded-lg  text-black  focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                     </div>

        //                     {/* <!-- Assign To --> */}
        //                     <div>
        //                         <h3 className="text-lg font-semibold mb-2">Assign To</h3>
        //                         <input type="text" placeholder="Employee Name" className="w-full  text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                     </div>

        //                     {/* <!-- Category --> */}
        //                     <div>
        //                         <h3 className="text-lg font-semibold mb-2">Category</h3>
        //                         <input type="text" placeholder="Dev, Design, etc" className="w-full text-black  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        //                     </div>
        //                 </div>

        //                 {/* <!-- Right Side Field (Description) --> */}
        //                 <div className="space-y-6">
        //                     <div>
        //                         <h3 className="text-lg font-semibold mb-2">Task Description</h3>
        //                         <textarea className="w-full h-48 px-4 py-2 border rounded-lg text-black  focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter task description"></textarea>
        //                     </div>

        //                     {/* <!-- Submit Button --> */}
        //                     <div>
        //                         <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        //                             Submit
        //                         </button>
        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>





        // </div >
    )
}

export default CreateTask_Admin