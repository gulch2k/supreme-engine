import { useNavigate } from "react-router-dom";

const SignedOutWebsite = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <button></button>
    </div>
  );
};

export default SignedOutWebsite;