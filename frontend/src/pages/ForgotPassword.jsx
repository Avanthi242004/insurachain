export default function ForgotPassword() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <p className="auth-subtitle">
          Enter your email to receive reset instructions
        </p>
        <input type="email" placeholder="Email" />
        <button className="auth-btn">Send Reset Link</button>
      </div>
    </div>
  );
}
