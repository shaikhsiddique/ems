import React from 'react';

function TaskListNumber({ data }) {
  // Calculate counts based on the task properties
  const newTaskCount = data.tasks.filter(task => task.newTask).length;
  const activeTaskCount = data.tasks.filter(task => task.active).length;
  const completedTaskCount = data.tasks.filter(task => task.completed).length;
  const failedTaskCount = data.tasks.filter(task => task.failed).length;

  return (
    <div className='flex w-full mt-10 justify-between gap-5 sm:flex-nowrap flex-wrap'>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-red-400">
        <h2 className='text-4xl font-semibold'>{newTaskCount}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-blue-400">
        <h2 className='text-4xl font-semibold'>{activeTaskCount}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-green-400">
        <h2 className='text-4xl font-semibold'>{completedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] py-5 px-10 bg-yellow-400">
        <h2 className='text-4xl font-semibold'>{failedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
