import React, { useContext } from "react";
import  { AuthContext } from "../../context/AuthProvider";


function Accept_Task({ task }) {
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
    <div className="h-full w-[280px] bg-yellow-400 rounded-xl flex-shrink-0 p-6 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {task.category}
        </h3>
        <h4 className="text-sm text-gray-700 font-medium">{task.date}</h4>
      </div>
      <h2 className="mt-2 text-xl font-semibold text-gray-800">{task.title}</h2>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
        {task.description}
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={markComplete}
          className="bg-green-500 text-white py-1 px-3 text-sm rounded-lg hover:bg-green-600 transition duration-200"
        >
          Mark Completed
        </button>
        <button
          onClick={markFailed}
          className="bg-red-500 text-white py-1 px-3 text-sm rounded-lg hover:bg-red-600 transition duration-200"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default Accept_Task;
