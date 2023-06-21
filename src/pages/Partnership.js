import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Partnership = () => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      companyAddress: "",
      companyEmail: "",
      password: "",
      confirmPassword: "",
      photo: null,
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Please provide your full name"),
      companyAddress: Yup.string().required("Please provide your address"),
      companyEmail: Yup.string()
        .email("Invalid email address")
        .required("Please provide your email"),
      photo: Yup.string().required("Please provide your photo"),
      password: Yup.string()
        .min(6, "Password must be 6 character or more")
        .required("Please enter a password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password did not matches")
        .required("Please enter a password"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="grid grid-cols-12 h-screen">
      <div
        className="xs:hidden md:grid md:col-span-5 shadow-md  place-items-center relative"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-6xl font-bold drop-shadow text-white text-left mx-5 capitalize">
          Partner with us to bring changes
        </p>
      </div>
      <div className="xs:col-span-12 md:col-span-7 bg-primary grid place-items-center ">
        <form
          className="p-8 text-left flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <h1 className=" text-left font-bold text-2xl border-b-4 border-black pb-4 w-fit mb-4">
            Apply For Partnership
          </h1>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="companyName"
            >
              Company Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Company Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="text-red-500 ps-2">
                {formik.errors.companyName}
              </div>
            ) : null}
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="companyAddress"
            >
              Company Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyAddress"
              type="text"
              placeholder="Company Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyAddress}
            />
            {formik.touched.companyAddress && formik.errors.companyAddress ? (
              <div className="text-red-500 ps-2">
                {formik.errors.companyAddress}
              </div>
            ) : null}
          </div>
          <div class="mb-4 grid grid-cols-12 gap-3">
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="companyEmail"
              >
                Company Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyEmail"
                type="email"
                placeholder="Company Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyEmail}
              />
              {formik.touched.companyEmail && formik.errors.companyEmail ? (
                <div className="text-red-500 ps-2">
                  {formik.errors.companyEmail}
                </div>
              ) : null}
            </div>
            <div className="col-span-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="photo"
              >
                Photo Or Logo Upload
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photo"
                type="file"
                placeholder="photo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.photo}
              />
              {formik.touched.photo && formik.errors.photo ? (
                <div className="text-red-500 ps-2">{formik.errors.photo}</div>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 ps-2">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="bg-accent-dark text-white py-3 mx-10 rounded-lg drop-shadow mt-4 hover:bg-accent transition-colors duration-200"
          >
            Apply
          </button>
          <p className="font-extralight text-center py-3">
            Already have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default Partnership;
