import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function All_task() {
  const {userData} = useContext(AuthContext);
  

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
        <h2 className="w-1/5 text-white text-center text-sm sm:text-lg font-semibold ">Employee Name</h2>
        <h3 className="w-1/5 text-white text-center text-sm sm:text-lg font-semibold">New Tasks</h3>
        <h4 className="w-1/5 text-white text-center text-sm sm:text-lg font-semibold">Active Tasks</h4>
        <h4 className="w-1/5 text-white text-center text-sm sm:text-lg font-semibold">Completed Tasks</h4>
        <h4 className="w-1/5 text-white text-center text-sm px-6 sm:text-lg font-semibold">Failed Tasks</h4>
      </div>
      <div className=" overflow-y-auto">
        {userData.employee.map((e) => {
          // Count the tasks based on their statuses
          const newTaskCount = e.tasks.filter(task => task.newTask).length;
          const activeTaskCount = e.tasks.filter(task => task.active).length;
          const completedTaskCount = e.tasks.filter(task => task.completed).length;
          const failedTaskCount = e.tasks.filter(task => task.failed).length;

          return (
            <div key={e.id} className="border border-emerald-500 py-2 px-4 flex justify-between rounded mb-2">
              <h2 className="w-1/5 text-lg  text-center">{e.name}</h2>
              <h3 className="w-1/5 text-lg font-semibold  text-blue-600 text-center">{newTaskCount}</h3>
              <h4 className="w-1/5 text-lg font-semibold text-yellow-500 text-center">{activeTaskCount}</h4>
              <h4 className="w-1/5 text-lg font-semibold text-white text-center">{completedTaskCount}</h4>
              <h4 className="w-1/5 text-lg font-semibold pl-6 text-red-600 text-center">{failedTaskCount}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default All_task;
