import { Link } from "react-router-dom";

export default function HomePage() {
  const token = localStorage.getItem("token");
  return (
    <div className="card">
      <h1>Welcome to SecureBlog</h1>
      <p>Demo: React + JWT + HTTPS + MongoDB.</p>
      {token ? (
        <p><Link to="/dashboard" className="btn">Go to Dashboard</Link></p>
      ) : (
        <p>
          <Link to="/register" className="btn">Register</Link>
          <span style={{margin:"0 8px"}} />
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </p>
      )}
    </div>
  );
}
