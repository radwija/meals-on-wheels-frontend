import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updatePicture } from "../../api/profile-api";
import { async } from "q";

const EditPictureForm = ({ closeModal, email, role, onUpdateProfile }) => {
  const [error, setError] = useState("");
  const validationSchema = Yup.object({
    picture: Yup.mixed().required("Please upload your picture"),
  });

  const handleSubmit = async (values) => {
    if (!values.picture) {
      // Picture field is empty, prevent form submission
      return;
    }
    const res = await updatePicture(email, role, values.picture);
    if (typeof res === "string") {
      setError(res);
    } else {
      onUpdateProfile();
      closeModal();
    }
  };

  const formik = useFormik({
    initialValues: {
      picture: null,
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
            htmlFor="picture"
          >
            Upload your picture
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) =>
              formik.setFieldValue("picture", event.target.files[0])
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.picture && formik.errors.picture && (
            <div className="text-red-500 ps-2">{formik.errors.picture}</div>
          )}
        </div>

        <div className="flex justify-between">
          <p className="text-red-500 font-medium w-72">
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

export default EditPictureForm;
