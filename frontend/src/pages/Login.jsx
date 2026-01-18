import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: "User" });
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>User Login</h2>

        <p className="auth-subtitle">
          Access your blockchain-secured insurance account
        </p>

        <div className="auth-inputs">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <div className="auth-forgot">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit" className="auth-btn">
          Login
        </button>
      </form>
    </div>
  );
}
