import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateBackground } from "../../api/profile-api";

const EditBackgroundForm = ({ closeModal, email, role, onUpdateProfile }) => {
  const [error, setError] = useState("");
  const validationSchema = Yup.object({
    background: Yup.mixed().required("Please upload your background"),
  });

  const handleSubmit = async (values) => {
    if (!values.background) {
      // background field is empty, prevent form submission
      return;
    }

    const res = await updateBackground(email, role, values.background);
    if (typeof res === "string") {
      setError(res);
    } else {
      onUpdateProfile();
      closeModal();
    }
  };

  const formik = useFormik({
    initialValues: {
      background: null,
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
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="background"
          >
            Upload your background
          </label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.avif,.webp"
            id="background"
            name="background"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) =>
              formik.setFieldValue("background", event.target.files[0])
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.background && formik.errors.background && (
            <div className="text-red-500 ps-2">{formik.errors.background}</div>
          )}
        </div>

        <div className="flex justify-between">
          <p className="text-red-500 font-medium">
            Note: The file size must be under 300kb
          </p>
          <button
            type="submit"
            className="px-3 py-2 text-white rounded-md shadow-md bg-accent hover:scale-110 hover:bg-accent-dark transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBackgroundForm;
