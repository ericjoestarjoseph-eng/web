import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🔧 Vehicle Service Management</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Book Appointment</Link>
        <Link to="/history">Service History</Link>
      </div>
    </nav>
  );
}

export default Navbar;
