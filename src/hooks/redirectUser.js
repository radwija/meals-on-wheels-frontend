import { useNavigate } from "react-router-dom";

export const useRedirectUser = () => {
  const navigate = useNavigate();

  const redirectUser = (role) => {
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

  return redirectUser;
};
