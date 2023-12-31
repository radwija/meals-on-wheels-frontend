import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../api/axios";
import { getDistance } from "../api/map.-api";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useRedirectUser } from "../hooks/redirectUser";
const Registration = () => {
  const [success, setSuccess] = useState("");
  const isLogin = useIsAuthenticated();
  const auth = useAuthUser();
  const redirectUser = useRedirectUser();
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    if (isLogin()) {
      const role = auth().role?.[0];
      redirectUser(role);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      gender: "MALE",
      role: "ROLE_MEMBER",
      email: "",
      password: "",
      confirmPassword: "",
      file: null,
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please provide your full name"),
      address: Yup.string().required("Please provide your address"),
      gender: Yup.string().required("Please select a gender"),
      role: Yup.string().required("Please select a role"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please provide your email"),
      password: Yup.string().required("Please provide a password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
      file: Yup.mixed().required("Please provide a qualification file"),
      image: Yup.mixed().required("Please provide a photo"),
    }),
    onSubmit: async (values) => {
      setSuccess(null);
      setError(null);
      setIsSubmiting(true);
      // calling maps api to get user distance

      // calling api to save user data

      try {
        const res = await getDistance(values.address);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("address", values.address);
        formData.append("gender", values.gender);
        formData.append("role", values.role);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("file", values.file);
        formData.append("image", values.image);
        formData.append("distance", res);

        const response = await axios.post("api/auth/register", formData);
        console.log(response.data);
        setError(null);
        setSuccess("Registration successful");
        formik.resetForm();
      } catch (error) {
        console.error(error);
        setSuccess(null);
        if (error?.response?.data) {
          setError(error?.response?.data);
        } else if (error) {
          setError(error.message);
        } else {
          setError("No Response From Server");
        }
      }
      setIsSubmiting(false);
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formik;

  return (
    <Layout>
      <div className="grid grid-cols-12 h-screen ">
        <div
          className="hidden lg:col-span-5 bg-cover  shadow-md lg:grid place-items-center relative"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p className="text-6xl font-bold drop-shadow text-white text-left mx-5 capitalize">
            Become part of our community
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 bg-primary grid place-items-center">
          <form className="p-8 text-left flex flex-col" onSubmit={handleSubmit}>
            <h1 className=" text-left font-bold text-2xl border-b-4 border-black pb-4 w-fit mb-4">
              Registration
            </h1>
            {success && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <strong className="font-bold">Registration Successful! </strong>
                <span className="block sm:inline px-1">
                  Your account has been created successfully.
                </span>
                <span className="block sm:inline mt-2">
                  Please note that your account will be reviewed and activated
                  by our administrators within the next 24 hours.
                </span>
              </div>
            )}
            {error && (
              <h2 className="text-xl bg-red-100 border border-red-400 text-red-700 font-semibold p-2  mb-4">
                {error}
              </h2>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div className="text-red-500 ps-2">{errors.name}</div>
              )}
            </div>
            <div className="mb-4 grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 ps-2">{errors.email}</div>
                )}
              </div>
              <div className="col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="address"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.address && errors.address && (
                  <div className="text-red-500 ps-2">{errors.address}</div>
                )}
              </div>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <label
                  for="gender"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border text-gray-700 bg-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option disabled>Choose a gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
              <div className="col-span-6">
                <label
                  for="role"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="border text-gray-700 bg-white text-sm rounded-lg block w-full p-2.5 cursor-pointer"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option disabled>Choose a role</option>
                  <option value="ROLE_MEMBER">Member</option>
                  <option value="ROLE_CAREGIVER">Caregiver</option>
                  <option value="ROLE_DRIVER">Driver</option>
                  <option value="ROLE_VOLUNTEER">Volunteer</option>
                </select>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="qualification"
                >
                  Qualification File Upload
                </label>
                <input
                  className="shadow appearance-none border rounded w-full  px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="qualification"
                  type="file"
                  name="file"
                  onChange={(event) =>
                    formik.setFieldValue("file", event.target.files[0])
                  }
                  onBlur={handleBlur}
                />
                {touched.file && errors.file && (
                  <div className="text-red-500 ps-2">{errors.file}</div>
                )}
              </div>
              <div className="col-span-12 md:col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="photo"
                >
                  Photo Upload
                </label>
                <input
                  className="shadow appearance-none border rounded w-full  px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="file"
                  accept=".jpg,.jpeg,.png,.avif,.webp"
                  name="image"
                  onChange={(event) =>
                    formik.setFieldValue("image", event.target.files[0])
                  }
                  onBlur={handleBlur}
                />
                {touched.image && errors.image && (
                  <div className="text-red-500 ps-2">{errors.image}</div>
                )}
              </div>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 ps-2">{errors.password}</div>
                )}
              </div>
              <div className="col-span-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-red-500 ps-2">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmiting ? true : false}
              className="bg-accent-dark text-white py-3 mx-10 rounded-lg drop-shadow mt-4 hover:bg-accent transition-colors duration-200 disabled:bg-accent-dark disabled:hover:scale-100"
            >
              Register
            </button>
            <Link to="/login">
              <p className="font-extralight text-center py-3 cursor-pointer">
                Already have an account? Login
              </p>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
