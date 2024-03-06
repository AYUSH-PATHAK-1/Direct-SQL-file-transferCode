import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
                Email :
              </label>
              <input
                type="text"
                className="uname p-2 focus:bg-pink-200 bg-gray-300 rounded-md"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="info flex-col flex w-auto gap-4 md:w-[400px]">
              <label htmlFor="" className="uname mx-2 text-xl">
                DOB :
              </label>
              <input
                type="date"
                className="uname p-2 focus:bg-pink-200 bg-gray-300 rounded-md"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="info flex-row my-5 flex w-auto gap-4 md:w-[400px]">
              <label htmlFor="" className="uname mx-2 text-xl">
                Gender :
              </label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label htmlFor="male" className="ml-2">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label htmlFor="female" className="ml-2">
                  Female
                </label>
              </div>
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
          <div className="justify-center flex">
            <p>
              Already have an account ?{" "}
              <Link to={"/login"}>
                {" "}
                <span className=" underline text-red-500">Login</span>
              </Link>
            </p>
          </div>
          <div className="button justify-center items-center flex mt-5">
            <button
              type="submit"
              className="rounded-xl bg-green-500 font-bold hover:ease-in-out transition-all hover:bg-yellow-300 p-3">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
