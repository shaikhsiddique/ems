import React, { useState, useEffect } from 'react';

function Header({ data , setUser}) {
  const [username, setUsername] = useState();

  useEffect(() => {
    if (!data) {
      setUsername("Admin");
    } else {
      setUsername(data.name);
    }
  }, [data]); // Runs only when `data` changes  

  const logout = ()=>{
   localStorage.removeItem('loggedInUSer');
   setUser();
  }

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium'>
        HELLO <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={()=>logout()} className='bg-red-600 text-white px-5 py-2 rounded-mg text-lg font-medium'>
        Logout
      </button>
    </div>
  );
}

export default Header;
