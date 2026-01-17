export default function AdminLogin() {
  return (
    <div className="auth-page">
      <div className="auth-card admin">

        <h2>Admin Login</h2>
        <p className="auth-subtitle">
          Secure administrator access only
        </p>

        <input type="text" placeholder="Admin ID" />
        <input type="password" placeholder="Admin Password" />

        <button className="auth-btn">Login as Admin</button>

        <p className="auth-footer">
          Authorized personnel only
        </p>

      </div>
    </div>
  );
}
