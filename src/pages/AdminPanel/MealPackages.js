import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AddMealModal from '../../components/modal/AddMealModal';

const MealPackages = () => {
  const [meals, setMeals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get('/api/meal');
      setMeals(response.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const addMeal = async (meal) => {
    try {
      const response = await axios.post('/api/menu/add', meal);
      setMeals([...meals, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  };
  
  return (
    <Layout>
      <div className="flex min-h-screen mr-5">
        <Sidebar />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Meal Packages</h1>
          <h2 className="text-2xl font-bold mb-4 mt-10">Available Meals</h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className=" w-full bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Meal
          </button>

          {meals.length > 0 && (
            <table className="mt-4 w-full border border-gray-300">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-4 py-2 font-medium">Meal Package</th>
                  <th className="px-4 py-2 font-medium">Main Course</th>
                  <th className="px-4 py-2 font-medium">Salad</th>
                  <th className="px-4 py-2 font-medium">Soup</th>
                  <th className="px-4 py-2 font-medium">Dessert</th>
                  <th className="px-4 py-2 font-medium">Drink</th>
                  <th className="px-4 py-2 font-medium">Frozen</th>
                  <th className="px-4 py-2 font-medium">Meal Image</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {meals.map((meal, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{meal.mealPackage}</td>
                    <td className="px-4 py-2">{meal.mainCourse}</td>
                    <td className="px-4 py-2">{meal.salad}</td>
                    <td className="px-4 py-2">{meal.soup}</td>
                    <td className="px-4 py-2">{meal.dessert}</td>
                    <td className="px-4 py-2">{meal.drink}</td>
                    <td className="px-4 py-2">{meal.frozenMeal ? 'Yes' : 'No'}</td>
                    <td className="px-4 py-2">{meal.mealPhoto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-primary p-4 rounded-md">
                <AddMealModal addMeal={addMeal} />

                <div className="w-full col-span-2 flex justify-center">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full hover:text-red-600 text-gray-700 font-medium py-2 px-4 rounded-md focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MealPackages;
