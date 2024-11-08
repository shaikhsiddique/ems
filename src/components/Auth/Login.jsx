import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

function Login({ handelLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center h-screen w-full relative">
      <h1 className="absolute top-5 left-5 text-3xl text-white font-bold">Login</h1>
      <div className="border-2 border-emerald-600 p-12 sm:px-20 mt-6 rounded-xl shadow-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-2 rounded-full border-emerald-600 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 py-6 px-3 w-72 focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50"
            placeholder="Enter your Email"
          />

          <div className="relative w-72">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border-2 rounded-full border-emerald-600 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 py-6 px-3 w-full pr-12 focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50"
              placeholder="Enter your Password"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            />
          </div>

          <button className="border-2 rounded-full bg-emerald-600 border-black text-xl text-white outline-none py-2 px-5 hover:bg-emerald-700 transition duration-300 mt-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
