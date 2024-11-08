import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function Complete_Task({ task }) {
  const { userData, updateUserData } = useContext(AuthContext);

  const markComplete = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUSer"));

    if (loggedInUser && loggedInUser.employee && userData?.employee) {
      const updatedTasks = loggedInUser.employee.tasks.map((e) => {
        if (e.title === task.title) {
          return { ...e, completed: true, active: false };
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
    <div className="h-full w-[280px] bg-yellow-400 rounded-xl flex flex-col justify-evenly flex-shrink-0 p-6 shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-between items-center w-full">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {task.category}
        </h3>
        <h4 className="text-xs text-gray-700 font-medium">{task.date}</h4>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-800">{task.title}</h2>

      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
        {task.description}
      </p>

      <div className="mt-4">
        <button onClick={markComplete} className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg transition duration-200 hover:bg-green-600">
          Completed
        </button>
      </div>
    </div>
  );
}

export default Complete_Task;
