import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Registration = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("MALE");
  const [role, setRole] = useState("ROLE_MEMBER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);
    formData.append("image", image);

    axios
      .post("http://localhost:8080/api/auth/register", formData)
      .then((resp) => {
        console.log(resp.data);
        setError("");
        setSuccess("Registration successful");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data.error) {
          setError(err.response.data.error);
        } else if ("File size too big, make sure it under 1 mb") {
          setError(err.response.data);
        } else {
          setError("No Response From Server");
        }
      });
  };

  // try {
  //   let resp = await axios.post(UPLOAD_ENDPOINT, formData, {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   })
  //   console.log(resp)
  // } catch (e) {
  //   // todo: email already used, warn user
  //   console.error(e) //can be removed
  // }
  // setStatus(resp.status === 200 ? "Thank you!" : "Error.")
  // if (resp.status === 200) {
  //   // todo: succesful registration, inform user
  //   navigate("/login?msg=true") //can be removed
  // }

  return (
    <div className="grid grid-cols-12 h-screen">
      <div
        className="xs:hidden md:col-span-5 bg-cover  shadow-md md:grid place-items-center relative"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
          backgroundPosition: "center",
        }}
      >
        <p className="text-6xl font-bold drop-shadow text-white text-left mx-5 capitalize">
          Become part of our community
        </p>
      </div>
      <div className="xs:col-span-12 md:col-span-7 bg-primary grid place-items-center">
        <form className="p-8 text-left flex flex-col" onSubmit={handleSubmit}>
          <h1 className=" text-left font-bold text-2xl border-b-4 border-black pb-4 w-fit mb-4">
            Registration
          </h1>
          {success && (
            <h2 className="text-2xl bg-green-700 text-green-300 font-semibold p-3 rounded-md capitalize">
              {success}, click here to login
            </h2>
          )}
          {error && (
            <h2 className="text-2xl bg-red-700 text-red-300 font-semibold p-3 rounded-md capitalize">
              {error}
            </h2>
          )}
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
              name="name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            {!name ? (
              <div className="text-red-500 ps-2">This field is required</div>
            ) : null}
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
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {!email ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : null}
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
                name="address"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              {!address ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : null}
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
                name="gender"
                class="border text-gray-700 bg-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled>Choose a gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
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
                name="role"
                class="border text-gray-700 bg-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
                onChange={(e) => setRole(e.target.value)}
              >
                <option disabled>Choose a role</option>
                <option value="ROLE_MEMBER">Member</option>
                <option value="ROLE_CAREGIVER">Caregiver</option>
                <option value="ROLE_DRIVER">Driver</option>
                <option value="ROLE_VOLUNTEER">Volunteer</option>
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
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              {!file ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : null}
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
                name="image"
                placeholder="photo"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {!image ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : null}
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
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!password ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : null}
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
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {!confirmPassword ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : confirmPassword !== password ? (
                <div className="text-red-500 ps-2">This field is required</div>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="bg-accent-dark text-white py-3 mx-10 rounded-lg drop-shadow mt-4 hover:bg-accent transition-colors duration-200"
          >
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
