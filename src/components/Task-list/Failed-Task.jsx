import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function Failed_Task({ task }) {
 
  const { userData, updateUserData } = useContext(AuthContext);

  const markFailed = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUSer"));

    if (loggedInUser && loggedInUser.employee && userData?.employee) {
      const updatedTasks = loggedInUser.employee.tasks.map((e) => {
        if (e.title === task.title) {
          return { ...e, failed: true, active: false };
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
    <div className="h-full w-[280px] bg-yellow-400 rounded-xl flex-shrink-0 p-6 shadow-lg transform transition duration-200 hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {task.category}
        </h3>
        <h4 className="text-xs text-gray-700 font-medium">{task.date}</h4>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-800 leading-tight">
        {task.title}
      </h2>

      <p className="mt-2 text-sm text-gray-700">{task.description}</p>

      <div className="mt-4">
        <button onClick={markFailed} className="w-full py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200">
          Failed
        </button>
      </div>
    </div>
  );
}

export default Failed_Task;
