import React from 'react'
import Accept_Task from './Accept-Task'
import New_Task from './New-Task'
import Complete_Task from './Complete-Task'
import Failed_Task from './Failed-Task'
function Task_List({data}) {
  
  return (
    <div className='h-[45vh] flex flex-nowrap overflow-x-auto gap-5 items-center justify-start w-full py-6 px-2 mt-10' id='task-list'>
      {data.tasks.map((task, index) => {
        if (task.completed) {
          return <Complete_Task key={index} task={task} />;
        } else if (task.failed) {
          return <Failed_Task key={index} task={task} />;
        } else if (task.newTask) {
          return <New_Task key={index} task={task} />;
        } else if (task.active) {
          return <Accept_Task key={index} task={task} />;
        }
        return null; // Handle any other tasks if needed
      })}
    </div>
  )
}

export default Task_List