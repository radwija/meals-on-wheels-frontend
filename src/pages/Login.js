import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../assets/mow_logo.png";
const Login = () => {
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-12 bg-primary grid place-items-center ">
        <div className="grid place-items-center w-1/2 border-2 rounded-xl drop-shadow-md bg-white">
          <div className="grid place-items-center">
            <img src={logo} alt="logo" className="object-contain h-40 " />
            <h2 className="font-semibold text-2xl">Meals On Wheels</h2>
          </div>
          <h1 className="font-bold text-4xl border-b-4 pb-2 mb-2 w-fit border-black">
            Welcome Back
          </h1>
          <form
            className="p-8 text-left flex flex-col w-3/4"
            onSubmit={formik.handleSubmit}
          >
            <div class="mb-4">
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 ps-2">{formik.errors.email}</div>
              ) : null}
            </div>
            <div class="mb-4">
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
            <p className="font-extralight text-center py-3">
              Don't have an account? Register
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
