import { Link } from "react-router-dom";
import { SERVICES } from "../services";

function ServiceCard(props) {
  return (
    <div className="service-card">
      <div>
        <div className="service-topline">
          <span className="service-emoji">{props.emoji}</span>
          <h2>{props.name}</h2>
        </div>
        <p className="service-desc">📝 {props.desc}</p>
      </div>

      <div className="service-footer">
        <p className="service-price">₹{props.price}</p>

        <Link to={`/booking?service=${encodeURIComponent(props.name)}`}>
          <button type="button">Book Service</button>
        </Link>
      </div>
    </div>
  );
}

function Services() {
  return (
    <main className="services-page">
      <div className="services-header">
        <p className="eyebrow">Vehicle care</p>
        <h1>Our Services</h1>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.name} emoji={s.emoji} name={s.name} desc={s.desc} price={s.price} />
        ))}
      </div>

      <footer className="services-footer">
        <div className="services-footer-block">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>All prices are indicative and may vary based on vehicle model and condition.</li>
            <li>Additional parts or labor charges apply only after inspection.</li>
            <li>Service estimates are shared before work begins.</li>
          </ul>
        </div>

        <div className="services-footer-block">
          <h3>Charging Policy</h3>
          <ul>
            <li>Standard labor and material charges are billed as per the selected service.</li>
            <li>Complimentary checks are included with every service package.</li>
            <li>Final payment is due on completion of the vehicle service.</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default Services;
