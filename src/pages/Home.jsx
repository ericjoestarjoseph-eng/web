import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to Vehicle Service Management System</h1>
      <p className="home-sub">
        Manage customer vehicles, appointments, service history and billing in one place.
      </p>

      <div className="home-grid">
        <Link to="/services" className="home-card">
          <h2>🛠️ Services</h2>
          <p>Browse available services and prices.</p>
        </Link>
        <Link to="/booking" className="home-card">
          <h2>📅 Appointments</h2>
          <p>Book a service slot for a vehicle.</p>
        </Link>
        <Link to="/history" className="home-card">
          <h2>🧾 History & Billing</h2>
          <p>View past services and bill amounts.</p>
        </Link>
      </div>
    </main>
  );
}

export default Home;
