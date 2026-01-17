import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "User" });
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>User Login</h2>
        <p className="auth-subtitle">
          Access your blockchain-secured insurance account
        </p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        {/* Forgot Password */}
        <div className="auth-forgot">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}
