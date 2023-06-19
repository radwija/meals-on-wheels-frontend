import React from "react";

const Registration = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div
        className="col-span-5 bg-cover  shadow-md grid place-items-center relative"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
          backgroundPosition: "center",
        }}
      >
        <p className="text-6xl font-bold drop-shadow text-white text-left mx-5 capitalize">
          Become part of our community
        </p>
      </div>
      <div className="col-span-7 bg-primary grid place-items-center">
        <form action="" className="p-8 text-left flex flex-col ">
          <h1 className=" text-left font-bold text-2xl border-b-4 border-black pb-4 w-fit mb-4">
            Registration
          </h1>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="fullName"
            >
              Full Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-4 grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="address"
              >
                Address
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div class="mb-4 grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label
                for="gender"
                class="block mb-2 text-sm font-bold text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                class="border text-gray-700 bg-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
              >
                <option disabled>Choose a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-span-6">
              <label
                for="role"
                class="block mb-2 text-sm font-bold text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                class="border text-gray-700 bg-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
              >
                <option disabled>Choose a role</option>
                <option value="Member">Member</option>
                <option value="Caregiver">Caregiver</option>
                <option value="Driver">Driver</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>
          </div>
          <div class="mb-4 grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="qualification"
              >
                Qualification File Upload
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="qualification"
                type="file"
              />
            </div>
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="photo"
              >
                Photo Upload
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photo"
                type="file"
                placeholder="photo"
              />
            </div>
          </div>
          <div class="mb-4 grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Confirm Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button className="bg-accent-dark text-white py-3 mx-10 rounded-lg drop-shadow mt-4 hover:bg-accent transition-colors duration-200">
            Register
          </button>
          <p className="font-extralight text-center py-3">
            Already have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
