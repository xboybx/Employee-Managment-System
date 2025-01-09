//This is the component which render on Employe Login

import React from 'react'
import Header from "../other/Header"
import TaskListAnalytics from '../other/TaskListAnalytics'
import TaskList_E from '../TaskList/TaskList_E'

const EmployeeDashboard = (props) => {
    // console.log(props.userChange)
    return (<>
        <Header changeUser={props.userChange} username={props.data.firstName} />
        <TaskListAnalytics analytics={props.data.taskCounts} />
        <TaskList_E listdata={props.data.tasks} />
    </>
    )
}

export default EmployeeDashboard