import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="auth-page">
      <form className="auth-card auth-reset">

        <h2>Reset Password</h2>

        <p className="auth-subtitle">
          Enter your email to receive reset instructions
        </p>

        <input
          type="email"
          placeholder="Email"
          required
          className="auth-input"
        />

        <button type="submit" className="auth-btn">
          Send Reset Link
        </button>

        <div className="auth-back">
          <Link to="/login">← Back to Login</Link>
        </div>

      </form>
    </div>
  );
}
