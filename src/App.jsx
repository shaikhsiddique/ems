import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import Employee from './components/Dashboard/Employee';
import Admin_board from './components/Dashboard/Admin-board';
import { AuthContext } from './context/AuthProvider';
import {setLocalStorage , getLocalStorage} from './utils/localStorage';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

 
  const { userData, updateUserData } = useContext(AuthContext);
 
  if(!getLocalStorage().employee || !getLocalStorage().admin ){
    setLocalStorage();
  }
  const handelLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === 'admin') {
      const adminUser = { role: 'admin' };
      setUser(adminUser);
      localStorage.setItem('loggedInUSer', JSON.stringify(adminUser));
    } else if (userData) {
      const employee = userData.employee?.find((e) => email === e.email && password === e.password);
      if (employee) {
        const employeeUser = { role: 'employee', employee };
        setUser(employeeUser);
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUSer', JSON.stringify(employeeUser));
      } else {
        console.log("Invalid credentials");
      }
    } else {
      console.log("Invalid credentials");
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUSer"));
    if (storedUser) {
      setUser(storedUser);
      if (storedUser.role === "employee") {
        setLoggedInUser(storedUser.employee);
      }
    }
  }, [userData]); // Re-run whenever userData is updated

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user?.role === "admin" ? <Admin_board setUser={setUser} /> : ""}
      {user?.role === "employee" ? <Employee data={loggedInUser} setUser={setUser} /> : ""}
    </>
  );
}

export default App;
