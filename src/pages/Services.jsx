import { Link } from "react-router-dom";
import { SERVICES } from "../services";

function ServiceCard(props) {
  return (
    <div className="match-card">
      <h2>{props.name}</h2>

      <p>📝 {props.desc}</p>

      <p>💰 ₹{props.price}</p>

      <Link to={`/booking?service=${encodeURIComponent(props.name)}`}>
        <button>Book Service</button>
      </Link>
    </div>
  );
}

function Services() {
  return (
    <main className="matches-page">
      <h1>Our Services</h1>

      <div className="matches-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.name} name={s.name} desc={s.desc} price={s.price} />
        ))}
      </div>
    </main>
  );
}

export default Services;
