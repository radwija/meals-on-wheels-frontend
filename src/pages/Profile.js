import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router";
import { getProfile } from "../api/profile-api";

const Profile = () => {
  const auth = useAuthUser();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const roleName = role.substring(5).toLowerCase();
  const fetchData = async () => {
    if (!auth()) {
      // User is not authenticated and cookies are expired
      navigate("/login");
    }
    const userEmail = auth().email;
    const res = await getProfile(userEmail, role);
    setProfile(res);
    // Rest of your code here
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="h-full bg-primary p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="absolute right-12 mt-4 rounded">
            <button
              className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
              title="Settings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full h-[250px]">
            {profile.background ? (
              <img
                src={`data:image/jpeg;base64,${profile.background}`}
                alt="pfp"
                className="w-full h-full rounded-tl-lg rounded-tr-lg"
              />
            ) : (
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                className="w-full h-full rounded-tl-lg rounded-tr-lg"
                alt=""
              />
            )}
          </div>
          <div className="flex flex-col items-center -mt-20">
            {profile.picture ? (
              <img
                src={`data:image/jpeg;base64,${profile.picture}`}
                alt="pfp"
                className="w-40 border-4 border-white rounded-full"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl font-semibold">{profile.name}</p>
            </div>
            <p className="text-gray-700 capitalize">
              {roleName} Of Meals On Wheels
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center bg-accent hover:bg-accent-dark text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col ">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-semibold text-left">
                Personal Info
              </h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24 text-left">Full name</span>
                  <span className="text-gray-700">: {profile.name}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-left">Email</span>
                  <span className="text-gray-700">: {profile.email}</span>
                </li>

                {profile.gender && (
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24 text-left">Gender</span>
                    <span className="text-gray-700">: {profile.gender}</span>
                  </li>
                )}
                <li className="flex border-b py-2">
                  <span className="font-bold w-24 text-left">Address</span>
                  <span className="text-gray-700">: {profile.address}</span>
                </li>
                {auth()?.role[0] === "ROLE_PARTNER" ? null : (
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24 text-left">Birthday</span>
                    <span className="text-gray-700">
                      :{" "}
                      {profile.birthDay ? profile.birthDay : "No birthday data"}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
