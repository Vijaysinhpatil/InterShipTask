import { Link, useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No auth logic, just redirect
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="login-input"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="login-text">
          Don't have an account? <Link to="/signup" className="login-link">Signup here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;