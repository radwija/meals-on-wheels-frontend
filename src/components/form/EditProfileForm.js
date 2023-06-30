import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../api/profile-api";

const EditProfileForm = ({ closeModal, user, role, onUpdateProfile }) => {
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  let validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    address: Yup.string().required("Address is required"),
  });

  if (role !== "ROLE_PARTNER") {
    validationSchema = validationSchema.shape({
      gender: Yup.string().required("Gender is required"),
      birthDay: Yup.date().required("Birthday is required"),
    });
  }

  const handleSubmit = async (values) => {
    setIsSubmiting(true);
    let res;
    if (role === "ROLE_PARTNER") {
      // Exclude gender and birthday fields for partner role
      const { gender, birthday, ...updatedValues } = values;
      res = await updateProfile(updatedValues, role);
    } else {
      res = await updateProfile(values, role);
    }
    if (typeof res === "string") {
      setError(res);
    } else {
      onUpdateProfile();
      setIsSubmiting(false);
      closeModal();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: user.email,
      fullName: user.name,
      address: user.address,
      gender: user.gender,
      birthDay: user.birthDate,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      {error && (
        <h2 className="text-lg max-w-lg bg-red-100 border border-red-400 text-red-700 font-semibold p-2  mb-4 whitespace-break-spaces">
          {error}
        </h2>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 ps-2">{formik.errors.fullName}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 ps-2">{formik.errors.address}</div>
          )}
        </div>
        {role === "ROLE_PARTNER" ? null : (
          <>
            <div className="mb-4">
              <label
                className=" text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                className="border text-gray-700 bg-white text-sm rounded-lg  w-full p-2.5 cursor-pointer"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="">Select</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-red-500 ps-2">{formik.errors.gender}</div>
              )}
            </div>
            <input type="hidden" name="email" value={formik.values.email} />
            <div className="mb-4">
              <label
                className=" text-gray-700 text-sm font-bold mb-2"
                htmlFor="birthDay"
              >
                Birthday
              </label>
              <input
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="birthDay"
                name="birthDay"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthDay}
              />
              {formik.touched.birthDay && formik.errors.birthDay && (
                <div className="text-red-500 ps-2">
                  {formik.errors.birthDay}
                </div>
              )}
            </div>
          </>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmiting ? true : false}
            className="px-3 py-2 text-white rounded-md shadow-md bg-accent hover:scale-110 hover:bg-accent-dark transition-all duration-300 disabled:bg-accent-dark disabled:hover:scale-100"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
