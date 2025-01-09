//This is the component which render on Admin Login

import React from 'react'
import Header from '../other/Header'
import CreateTask_Admin from '../other/CreateTask_Admin'
import TaskList_Admin from '../other/TaskList_Admin'

const AdminDashboard = (props) => {
    // console.log(props.user)

    return (
        <div>
            <Header AdminUser={props.user} changeUser={props.userChange} />
            <CreateTask_Admin />
            <TaskList_Admin />

        </div>
    )
}

export default AdminDashboard