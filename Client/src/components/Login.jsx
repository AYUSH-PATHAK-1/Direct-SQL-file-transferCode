import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",     
    password: "",
  });

  const handleChange = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-indigo-400 justify-center items-center h-screen flex">
      <div className="main p-4 rounded-xl bg-white font-mono shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex-col gap-7 justify-center items-center flex p-6">
            <div className="heading">
              <h1 className="text-center text-2xl">SignUp</h1>
            </div>
            <div className="info flex-col flex w-auto gap-4 md:w-[400px]">
              <label htmlFor="" className="uname mx-2 text-xl">
                Username :
              </label>
              <input
                type="text"
                className="uname p-2 focus:bg-pink-200 bg-gray-300 rounded-md"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>             
            <div className="info flex-col flex w-auto gap-4 md:w-[400px]">
              <label htmlFor="" className="uname mx-2 text-xl">
                Password :
              </label>
              <input
                type="password"
                name="password"
                className="uname p-2 focus:bg-pink-200 bg-gray-300 rounded-md"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='justify-center flex'>
            <p>Dont have an account ? <Link to={'/signup'}> <span className=' underline text-red-500'>Register</span></Link></p>
          </div>
          <div className="button justify-center items-center flex mt-5">
            <button
              type="submit"
              className="rounded-xl bg-green-500 font-bold hover:ease-in-out transition-all hover:bg-yellow-300 p-3">
              Login
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Login