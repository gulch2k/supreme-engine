import { useNavigate } from "react-router-dom";

const SignedOutWebsite = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
    </div>
  );
};

export default SignedOutWebsite;