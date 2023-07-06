import { useAuthUser } from "react-auth-kit";
import FeedbackForm from "../components/form/FeedbackForm";
import Layout from "../components/Layout";
import ForbiddenPage from "./ForbiddenPage";

const MemberFeedbackPage = () => {
  const auth = useAuthUser();
  const isMember = auth()?.role?.[0] === "ROLE_MEMBER";
  // if user not member forbid access
  if (!isMember) {
    return <ForbiddenPage />;
  }

  return (
    <Layout>
      <FeedbackForm />
    </Layout>
  );
};

export default MemberFeedbackPage;
