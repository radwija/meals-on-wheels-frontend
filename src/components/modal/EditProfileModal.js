import React, { useState } from "react";
import Modal from "react-modal";
import EditProfileForm from "../form/EditProfileForm";
const EditProfileModal = ({ user, role, onUpdateProfile, picture }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-3 py-2 text-white rounded-md shadow-md bg-accent hover:scale-110 hover:bg-accent-dark transition-all duration-300"
      >
        Edit Profile
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content rounded-md"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <button onClick={closeModal}>
            <svg
              className="cursor-pointer bi bi-x-lg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <EditProfileForm
          user={user}
          role={role}
          closeModal={closeModal}
          onUpdateProfile={onUpdateProfile}
        />
      </Modal>
    </div>
  );
};

export default EditProfileModal;
