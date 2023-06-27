import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../assets/mow_logo.png";
import { authenticate } from "../api/login-api";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please provide your email"),

      password: Yup.string().required("Please enter a password"),
    }),
    onSubmit: async (values) => {
      const res = await authenticate(values.email, values.password);
      if (typeof res === "string") {
        setError(res);
      } else {
        setError("");
        signIn({
          token: res.accessToken,
          tokenType: "Bearer",
          expiresIn: 3600,
          authState: {
            email: res.email,
            role: res.role,
          },
        });
        navigate("/profile");
      }
    },
  });
  return (
    <Layout>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-12 bg-primary grid place-items-center ">
          <div className="grid place-items-center xs:w-full md:w-1/2 border-2 rounded-xl drop-shadow-md bg-white">
            <div className="grid place-items-center">
              <img src={logo} alt="logo" className="object-contain h-40 " />
              <h2 className="font-semibold text-2xl">Meals On Wheels</h2>
            </div>
            <h1 className="font-bold text-4xl border-b-4 pb-2 mb-2 w-fit border-black">
              Welcome Back
            </h1>
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-lg"
                role="alert"
              >
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <form
              className="p-8 text-left flex flex-col w-3/4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
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
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 ps-2">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-4">
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 ps-2">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="bg-accent-dark text-white py-3 mx-10 rounded-lg drop-shadow mt-4 hover:bg-accent transition-colors duration-200"
              >
                Login
              </button>
              <Link to="/registration">
                <p className="font-extralight text-center py-3 cursor-pointer">
                  Don't have an account? Register
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
