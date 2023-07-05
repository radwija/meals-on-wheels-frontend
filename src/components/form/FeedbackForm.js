import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UPLOAD_ENDPOINT = "http://localhost:8080/api/feedback";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mealPackageId, setmealPackageId] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    alert(mealPackageId)
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("mealPackageId", mealPackageId);
    formData.append("feedback", feedback);
    axios
      .post(UPLOAD_ENDPOINT, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })
      .then((resp) => {
        navigate(`/member`);
      })
      .catch((err) => setStatus(err.response.data.message))


  };

  useEffect(() => {
    const MEAL_PACKAGE_COUNT = fetch("http://localhost:8080/api/mealcount", {
      credentials: "include" // Use "include" to send cookies along with the request
    })
      .then((response) => {
        return response.json();
      });


    let PackageCount = [];
    let itemList = [];
    const countPackage = async () => {
      PackageCount = await MEAL_PACKAGE_COUNT;
      console.log(PackageCount);
      setItemList(PackageCount)

      if (Array.isArray(PackageCount)) {
        PackageCount.forEach((item, index) => {
          itemList.push(<option value={index + 1}>{index + 1}</option>);
        });
      } else {
        console.log("PackageCount is not an array or iterable object.");
      }
    };
    countPackage();
  }, [])

  return (
    <div className="container py-10 flex items-center justify-center">
      <div className="card m-5 w-3/4 bg-white rounded flex flex-wrap">
        <form className="p-8 flex flex-col items-start w-full sm:w-1/2"
          onSubmit={handleSubmit}>
          <h3 className="contact-title font-semibold text-2xl text-black mb-4">
            Give us Feedback
          </h3>
          <hr className="border-white" />

          <div className="my-4 w-full">
            <label htmlFor="name" className="block text-lg text-gray-800 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="my-4 w-full">
            <label htmlFor="email" className="block text-lg text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
          </div>

          <div className="my-4 w-full">
            <label htmlFor="mealPackageId" className="block text-lg text-gray-800 mb-2">
              Package Number
            </label>
            <select
              id="mealPackageId"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setmealPackageId(e.target.value)}
              value={mealPackageId}
            >
              <option disabled>
                Select Meal Package Number
              </option>
              {itemList.map((meal, index) => (
                <option key={index} value={meal.id}>
                  {meal.id}
                </option>
              ))}
            </select>
          </div>

          <div className="my-4 w-full">
            <label htmlFor="feedback" className="block text-lg text-gray-800 mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              placeholder="Leave a comment here"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setFeedback(e.target.value)}
              value={feedback}
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-20 py-3 text-lg font-bold text-white bg-cyan-950 rounded hover:bg-cyan-800"
          >
            Submit
          </button>
        </form>

        <div className="flex items-center justify-center w-full sm:w-1/2">
          <div className="h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
              alt="feedback-image"
              className="object-cover h-full w-full rounded"
            />
          </div>
        </div>
      </div>
    </div>


  )
}
export default FeedbackForm;