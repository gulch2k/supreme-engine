import { useNavigate } from "react-router-dom";

const SignedOutWebsite = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default SignedOutWebsite;