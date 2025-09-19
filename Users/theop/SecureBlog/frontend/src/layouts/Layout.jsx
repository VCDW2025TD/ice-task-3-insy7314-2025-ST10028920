import { Link, Outlet, useLocation } from "react-router-dom";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function Layout() {
  const loggedIn = isLoggedIn();
  const loc = useLocation();

  return (
    <>
      <nav className="topnav">
        <div className="brand">SecureBlog</div>
        <div className="links">
          <Link to="/">Home</Link>
          {loggedIn ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>

      {loc.state?.flash && <div className="flash">{loc.state.flash}</div>}

      <main className="page">
        <Outlet />
      </main>

      <footer className="foot">React + JWT + HTTPS</footer>
    </>
  );
}
