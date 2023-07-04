import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
      const response = await axios.post('/api/meal', meal);
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
                <AddMealForm addMeal={addMeal} />

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

const AddMealForm = ({ addMeal }) => {
  const [mealPackage, setMealPackage] = useState('');
  const [mainCourse, setMainCourse] = useState('');
  const [salad, setSalad] = useState('');
  const [soup, setSoup] = useState('');
  const [dessert, setDessert] = useState('');
  const [drink, setDrink] = useState('');
  const [frozenMeal, setFrozenMeal] = useState('');
  const [mealPhoto, setMealPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      mealPackage,
      mainCourse,
      salad,
      soup,
      dessert,
      drink,
      frozenMeal: frozenMeal === 'true',
      mealPhoto,
    };

    addMeal(newMeal);

    setMealPackage('');
    setMainCourse('');
    setSalad('');
    setSoup('');
    setDessert('');
    setDrink('');
    setFrozenMeal('');
    setMealPhoto('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Meal</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="mealPackage" className="block font-medium mb-1">
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

        <div>
          <label htmlFor="mainCourse" className="block font-medium mb-1">
            Main Course
          </label>
          <input
            type="text"
            id="mainCourse"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={mainCourse}
            onChange={(e) => setMainCourse(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="salad" className="block font-medium mb-1">
            Salad
          </label>
          <input
            type="text"
            id="salad"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={salad}
            onChange={(e) => setSalad(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="soup" className="block font-medium mb-1">
            Soup
          </label>
          <input
            type="text"
            id="soup"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={soup}
            onChange={(e) => setSoup(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="dessert" className="block font-medium mb-1">
            Dessert
          </label>
          <input
            type="text"
            id="dessert"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="drink" className="block font-medium mb-1">
            Drink
          </label>
          <input
            type="text"
            id="drink"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="frozenMeal" className="block font-medium mb-1">
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
          <label htmlFor="mealPhoto" className="block font-medium mb-1">
            Meal Photo
          </label>
          <input
            type="file"
            id="mealPhoto"
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={mealPhoto}
            onChange={(e) => setMealPhoto(e.target.value)}
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

export default MealPackages;
