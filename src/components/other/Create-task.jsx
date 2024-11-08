import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function Create_task() {
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState(''); 
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  
  const { updateUserData } = useContext(AuthContext);


  const submitHandler = async (e) => {
    e.preventDefault();
  
    const newTask = {
      title : taskTitle,
      date,
      assignedTo,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    const updatedEmployees = employees.map((employee) => {
      if (assignedTo === employee.name) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
        };
      }
      return employee;
    });
    localStorage.removeItem("employees");
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    
    updateUserData();
    setTaskTitle('');
    setDate('');
    setAssignedTo('');
    setCategory('');
    setDescription('');
  

  };
  
  
  return (
    <div className="p-6 bg-black min-h-screen flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-4xl bg-[#1c1c1c] p-6 rounded-lg shadow-lg space-y-6 text-white"
      >
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div className="flex-1 space-y-6 md:mr-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Task-Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)} // Two-way binding
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} // Two-way binding
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Assign to</h3>
              <input
                type="text"
                placeholder="Employee Name"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)} // Two-way binding
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <input
                type="text"
                placeholder="Design, Dev etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)} // Two-way binding
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex-1 pb-8">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <textarea
              rows="8"
              placeholder="Add task description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)} // Two-way binding
              className="w-full h-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
            ></textarea>
          </div>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create_task;
