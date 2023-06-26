import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router";
import { getProfile } from "../api/profile-api";
import Layout from "../components/Layout";
import EditProfileModal from "../components/modal/EditProfileModal";
import EditPictureModal from "../components/modal/EditPictureModal";
import EditBackgroundModal from "../components/modal/EditBackgroundModal";

const Profile = () => {
  const auth = useAuthUser();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const role = auth()?.role[0];
  const roleName = role.substring(5).toLowerCase();
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
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
  }, [isProfileUpdated]);

  const handleUpdateProfile = () => {
    setIsProfileUpdated(!isProfileUpdated);
  };

  return (
    <Layout>
      <>
        <div className="h-full bg-primary p-8">
          <div className="bg-white rounded-lg shadow-xl pb-8">
            <div className="absolute right-12 mt-4 rounded">
              <EditBackgroundModal />
            </div>
            <div className="w-full h-[250px]">
              {profile?.background ? (
                <img
                  src={`data:image/jpeg;base64,${profile?.background}`}
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
              <div className="relative">
                {profile?.picture ? (
                  <img
                    src={`data:image/jpeg;base64,${profile?.picture}`}
                    alt="pfp"
                    className="w-40 border-4 border-white rounded-full"
                  />
                ) : (
                  <div className="h-28 w-28 border-4 flex justify-center items-center bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <EditPictureModal />
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl font-semibold">{profile?.name}</p>
              </div>
              <p className="text-gray-700 capitalize">
                {roleName} Of Meals On Wheels
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div className="flex items-center space-x-4 mt-2">
                <EditProfileModal
                  user={profile}
                  role={role}
                  onUpdateProfile={handleUpdateProfile}
                />
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
                    <span className="text-gray-700">: {profile?.name}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24 text-left">Email</span>
                    <span className="text-gray-700">: {profile?.email}</span>
                  </li>

                  {profile?.gender && (
                    <li className="flex border-b py-2">
                      <span className="font-bold w-24 text-left ">Gender</span>
                      <span className="text-gray-700 capitalize">
                        : {profile?.gender.toLowerCase()}
                      </span>
                    </li>
                  )}
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24 text-left">Address</span>
                    <span className="text-gray-700">: {profile?.address}</span>
                  </li>
                  {auth()?.role[0] === "ROLE_PARTNER" ? null : (
                    <li className="flex border-b py-2">
                      <span className="font-bold w-24 text-left">Birthday</span>
                      <span className="text-gray-700">
                        {profile?.birthDate
                          ? profile?.birthDate
                          : "No birthday data"}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Profile;
