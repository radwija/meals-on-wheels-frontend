import React from "react";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const ForbiddenPage = () => {
  const navigate = useNavigate();
  const auth = useAuthUser();
  const role = auth()?.role?.[0];
  const handleRedirect = () => {
    switch (role) {
      case "ROLE_MEMBER":
        navigate("/member");
        break;
      case "ROLE_DRIVER":
        navigate("/driver");
        break;
      case "ROLE_CAREGIVER":
        navigate("/caregiver");
        break;
      case "ROLE_PARTNER":
        navigate("/partner");
        break;
      case "ROLE_ADMIN":
        navigate("/admin");
        break;
      default:
        // Handle any other roles or fallback to a default path
        navigate("/profile");
        break;
    }
  };
  return (
    <Layout>
      <div className="grid place-items-center mt-28">
        <div className="bg-white rounded-lg w-2/4 py-20 grid place-content-center gap-3">
          <h1 className="font-bold text-2xl">Access denied!</h1>
          <p text-lg>You doesn't have permission to view this page.</p>

          <button
            className="px-6 py-3 text-white bg-accent rounded-md hover:bg-accent-dark transition-colors"
            onClick={handleRedirect}
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ForbiddenPage;
