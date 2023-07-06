import React, { useState } from "react";
import axios from "axios";
import { menu_type } from "../../context/context-type";
import { useAuthUser } from "react-auth-kit";
import { getProfile } from '../../api/profile-api';
import { useNavigate } from 'react-router-dom';
import ForbiddenPage from "../../pages/ForbiddenPage";

const AddMealModal = ({ addMeal }) => {
    const [mealPackage, setMealPackage] = useState("");
    const [mainCourse, setMainCourse] = useState("");
    const [salad, setSalad] = useState("");
    const [soup, setSoup] = useState("");
    const [dessert, setDessert] = useState("");
    const [drink, setDrink] = useState("");
    const [frozenMeal, setFrozenMeal] = useState("");
    const [mealPhoto, setMealPhoto] = useState(null);

    const auth = useAuthUser();
    const role = auth()?.role[0];
    const [profile, setProfile] = useState({});
    const isAdmin = auth()?.role?.[0] === "ROLE_ADMIN";
    const token = auth()?.token;
    const navigate = useNavigate();

    const fetchData = async () => {
        if (!auth()) {
            navigate("/login");
        }
        const userEmail = auth()?.email;
        const res = await getProfile(userEmail, role);
        setProfile(res);
        // Rest of your code here
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("packageName", mealPackage);
            formData.append("mainCourse", mainCourse);
            formData.append("salad", salad);
            formData.append("soup", soup);
            formData.append("dessert", dessert);
            formData.append("drink", drink);
            formData.append("frozen", frozenMeal);
            formData.append("packageImage", mealPhoto);

            const meal = { ...menu_type };
            meal.packageName = mealPackage;
            meal.mainCourse = mainCourse;
            meal.salad = salad;
            meal.soup = soup;
            meal.dessert = dessert;
            meal.drink = drink;
            meal.frozen = frozenMeal;
            meal.packageImage = mealPhoto;

            // Making the API request
            const response = await axios.post("/menu/add", meal, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            // Reset form fields
            setMealPackage("");
            setMainCourse("");
            setSalad("");
            setSoup("");
            setDessert("");
            setDrink("");
            setFrozenMeal("");
            setMealPhoto(null);

            // Close the modal or show a success message
            // ...
        } catch (error) {
            console.error("Error adding meal:", error);
            // Handle error
            // ...
        }
    };

    // if user not admin forbid access
    if (!isAdmin) {
        return <ForbiddenPage />;
    }

    return (
        <div className="z-50 p-4 mt-10 justify-center">
            <h2 className="text-xl font-bold mb-4">Add New Meal</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="mealPackage"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Meal Package
                    </label>
                    <input
                        type="text"
                        id="mealPackage"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={mealPackage}
                        onChange={(e) => setMealPackage(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="mainCourse"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Main Course
                    </label>
                    <input
                        type="text"
                        id="mainCourse"
                        value={mainCourse}
                        onChange={(e) => setMainCourse(e.target.value)}
                        className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="salad"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Salad
                    </label>
                    <input
                        type="text"
                        id="salad"
                        value={salad}
                        onChange={(e) => setSalad(e.target.value)}
                        className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="soup"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Soup
                    </label>
                    <input
                        type="text"
                        id="soup"
                        value={soup}
                        onChange={(e) => setSoup(e.target.value)}
                        className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="dessert"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Dessert
                    </label>
                    <input
                        type="text"
                        id="dessert"
                        value={dessert}
                        onChange={(e) => setDessert(e.target.value)}
                        className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="drink"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Drink
                    </label>
                    <input
                        type="text"
                        id="drink"
                        value={drink}
                        onChange={(e) => setDrink(e.target.value)}
                        className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="frozenMeal"
                        className="block font-medium mb-1"
                    >
                        Frozen Meal
                    </label>
                    <select
                        id="frozenMeal"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={frozenMeal}
                        onChange={(e) => setFrozenMeal(e.target.value)}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="mealPhoto"
                        className="block font-medium mb-1"
                    >
                        Meal Photo
                    </label>
                    <input
                        type="file"
                        id="mealPhoto"
                        className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => setMealPhoto(e.target.files[0])}
                        required
                    />
                </div>

                <div className="w-full col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-black hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none"
                    >
                        Add Meal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMealModal;
