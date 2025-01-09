//This is the component that renders or appears when Employe is logged in and shows all trasks of the Employee asigned by the admin
import React from 'react'

const TaskList_E = (props) => {

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
    return (
        <>
            <h1 className='text-3xl font-bold bg-[#efedde]  pl-8'><u className='text-purple-400'>All Tasks</u></h1>
            <div
                id="tasksmain"
                className=" flex items-center gap-10 p-3 bg-[#efedde]   flex-nowrap overflow-x-auto"
            >
                {props.listdata.map((task, indx) => {
                    return (
                        <div
                            key={indx}
                            id="task_indv"
                            className={`${getRandomColor()} border-2 border-black shadow-[4px_4px_0px_#000000] h-[80%] w-[450px] rounded-lg flex-shrink-0`}
                        >
                            {/* Header Section */}
                            <div className="flex justify-between p-5 bg-[#f3f4f6] border-b-2 rounded-t-lg border-black font-semibold">
                                <h3 className="text-[#4b5563]">{task.category}</h3>
                                <h4 className="text-[#4b5563]">{task.taskDate}</h4>
                            </div>

                            {/* Task Details */}
                            <div className="p-5">
                                <h2 className="font-bold text-2xl mb-2 text-black">{task.taskTitle}</h2>
                                <p className="text-black text-base">{task.taskDescription}</p>
                            </div>
                        </div>
                    );
                })}
            </div>


        </>





        // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-Old code-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        //         <div id='tasksmain' className=' mt-10 flex items-center gap-10 p-5  flex-nowrap overflow-x-auto' >


        //             {props.listdata.map((task, indx) => {
        //                 return <div key={indx} id="taks_indv" className={`${getRandomColor()} h-full w-[300px] rounded-lg flex-shrink-0`}
        //                 >
        //                     <div className='flex   justify-between p-5 font-medium'>
        //                         <h3>{task.category}</h3>
        //                         <h4>{task.taskDate}</h4>
        //                     </div>

        //                     <div>
        //                         <h2 className='font-bold text-2xl mb-2 pl-5'>{task.taskTitle}</h2>
        //                         <p className='p-2'>{task.taskDescription}</p>
        //                     </div>
        //                 </div>
        //             })}


        // ....................................

        //             code to update in future that for now all the types of taskslist Data cards are rendering through map functio,so if we want to add any functionality buttons like
        //             click complete button,accept the task and failed task buttons ,we cannot achieve it through map function as it is not a single component
        //             so we have to divide each type of card in to different components and add respective buttons ,if we need any button functionality 
        //             The components to be brokedown are below
        // ............................................
        //             <div id="taks_indv" className='bg-green-300 h-full w-[300px] rounded-lg flex-shrink-0 '>
        //                 <div className='flex   justify-between p-5 font-medium'>
        //                     <h3>{props.listdata[0].category}</h3>
        //                     <h4>{props.listdata[0].taskDate}</h4>
        //                 </div>

        //                 <div>
        //                     <h2 className='font-bold text-2xl mb-2 pl-5'>Tittle</h2>
        //                     <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus porro consequuntur, inventore pariatur tempore error magnam aspernatur iusto laudantium quaerat corrupti aliquam, molestiae nesciunt corporis, ipsam perferendis velit illum ducimus!</p>
        //                 </div>
        //             </div>


        //             <div id="taks_indv" className='bg-purple-300 h-full w-[300px] rounded-lg flex-shrink-0 '>
        //                 <div className='flex   justify-between p-5 font-medium'>
        //                     <h3>Category</h3>
        //                     <h4>Date</h4>
        //                 </div>

        //                 <div>
        //                     <h2 className='font-bold text-2xl mb-2 pl-5'>Tittle</h2>
        //                     <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus porro consequuntur, inventore pariatur tempore error magnam aspernatur iusto laudantium quaerat corrupti aliquam, molestiae nesciunt corporis, ipsam perferendis velit illum ducimus!</p>
        //                 </div>
        //             </div>


        //             <div id="taks_indv" className='bg-blue-300 h-full w-[300px] rounded-lg flex-shrink-0 '>
        //                 <div className='flex   justify-between p-5 font-medium'>
        //                     <h3>Category</h3>
        //                     <h4>Date</h4>
        //                 </div>

        //                 <div>
        //                     <h2 className='font-bold text-2xl mb-2 pl-5'>Tittle</h2>
        //                     <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus porro consequuntur, inventore pariatur tempore error magnam aspernatur iusto laudantium quaerat corrupti aliquam, molestiae nesciunt corporis, ipsam perferendis velit illum ducimus!</p>
        //                 </div>
        //             </div>


        //             <div id="taks_indv" className='bg-yellow-300 h-full w-[300px] rounded-lg flex-shrink-0 '>
        //                 <div className='flex   justify-between p-5 font-medium'>
        //                     <h3>Category</h3>
        //                     <h4>Date</h4>
        //                 </div>

        //                 <div>
        //                     <h2 className='font-bold text-2xl mb-2 pl-5'>Tittle</h2>
        //                     <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus porro consequuntur, inventore pariatur tempore error magnam aspernatur iusto laudantium quaerat corrupti aliquam, molestiae nesciunt corporis, ipsam perferendis velit illum ducimus!</p>
        //                 </div>
        //             </div>



        //             <div id="taks_indv" className='bg-green-300 h-full w-[300px] rounded-lg flex-shrink-0 '>
        //                 <div className='flex   justify-between p-5 font-medium'>
        //                     <h3>Category</h3>
        //                     <h4>Date</h4>
        //                 </div>

        //                 <div>
        //                     <h2 className='font-bold text-2xl mb-2 pl-5'>Tittle</h2>
        //                     <p className='p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus porro consequuntur, inventore pariatur tempore error magnam aspernatur iusto laudantium quaerat corrupti aliquam, molestiae nesciunt corporis, ipsam perferendis velit illum ducimus!</p>
        //                 </div>
        //             </div>




        //         </div>
    )
}

export default TaskList_E