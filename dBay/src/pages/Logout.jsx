import { useNavigate } from "react-router-dom";

const SignedOutWebsite = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      const confirmed = window.confirm("Are you sure you want to sign out?");
      if (confirmed) {
          localStorage.clear();
          navigate("/login");
      }
      
      if (!confirmed) {
        navigate("/cart")
      }
  };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button onClick={handleLogout} style={{
                padding: '10px 20px',
                fontSize: '18px',
                borderRadius: '5px',
                border: 'none',
                color: '#fff',
                backgroundColor: '#007BFF',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
            }}>Sign Out</button>
        </div>
    );
};

export default SignedOutWebsite;