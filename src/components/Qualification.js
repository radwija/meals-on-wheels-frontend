import { useState } from "react";

const Qualification = ({ qualification, isOpen, closeModal, id, onClick}) => {
  const [showModal, setShowModal] = useState(isOpen);


  return (
    <> 
    <button
        className="bg-accent text-white hover:bg-accent-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={() => onClick()}
      >
       View Qualification
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white z-50 p-4 rounded-md shadow-md">
            {isOpen ? (
              <div>
                <img  src={`data:image/jpeg;base64,${qualification}`} alt="certificate" />
              </div>
            ) : (
              <div>No Qualification File</div>
            )}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick= { () => closeModal()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Qualification;
