import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditBackgroundForm = ({ closeModal }) => {
  const validationSchema = Yup.object({
    background: Yup.mixed().required("Please upload your background"),
  });

  const handleSubmit = (values) => {
    if (!values.background) {
      // background field is empty, prevent form submission
      return;
    }

    alert(JSON.stringify(values));
    closeModal();
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

        <div className="flex justify-end">
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
