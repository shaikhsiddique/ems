import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function New_Task({ task }) {

  const { userData, updateUserData } = useContext(AuthContext);

  const markAccept = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUSer"));

    if (loggedInUser && loggedInUser.employee && userData?.employee) {
      const updatedTasks = loggedInUser.employee.tasks.map((e) => {
        if (e.title === task.title) {
          return { ...e, active: true, newTask: false };
        }
        return e;
      });

      const updatedEmployee = { ...loggedInUser.employee, tasks: updatedTasks };
      const updatedUser = { ...loggedInUser, employee: updatedEmployee };

      const updatedUserData = {
        ...userData,
        employee: userData.employee.map((emp) =>
          emp.name === updatedEmployee.name ? updatedEmployee : emp
        ),
      };

      localStorage.setItem("loggedInUSer", JSON.stringify(updatedUser));
      localStorage.setItem("employees", JSON.stringify(updatedUserData.employee));

      updateUserData();
    }
  };

  return (
    <div className="h-full w-[280px] bg-yellow-400 rounded-xl flex flex-col justify-between flex-shrink-0 p-6 shadow-lg transform transition duration-200 hover:scale-105">
      <div className="flex justify-between items-center w-full">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {task.category}
        </h3>
        <h4 className="text-xs text-gray-700 font-medium">{task.date}</h4>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-800 leading-tight">
        {task.title}
      </h2>

      <p className="mt-2 text-sm text-gray-700">{task.description}</p>

      <div className="flex justify-center mt-6">
        <button onClick={()=> markAccept()} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 text-sm">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default New_Task;
