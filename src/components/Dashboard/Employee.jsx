import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Task_List from '../Task-list/Task-List'

function Employee({data ,setUser}) {
  return (
    <div className='p-10 bg-[#1c1c1c] h-auto min-h-screen w-full overflow-x-hidden overflow-y-hidden'>
        <Header  data={data} setUser={setUser} />
        <TaskListNumber  data={data}/>
        <Task_List  data={data}/>
    </div>
  )
}

export default Employee