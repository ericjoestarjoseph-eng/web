import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../supabase";
import { SERVICES, priceOf } from "../services";

function Booking() {
  const [searchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [service, setService] = useState(searchParams.get("service") || "");
  const [date, setDate] = useState("");

  async function handleBooking() {
    if (!name || !vehicleNumber || !vehicleModel || !service || !date) {
      alert("Please fill all the details");
      return;
    }

    const { error } = await supabase.from("service_bookings").insert([
      {
        customer_name: name,
        vehicle_number: vehicleNumber,
        vehicle_model: vehicleModel,
        service_type: service,
        service_date: date,
        amount: priceOf(service),
      },
    ]);

    if (error) {
      console.error(error);
      alert("Booking failed");
      return;
    }

    alert("Appointment booked successfully!");
    setName("");
    setVehicleNumber("");
    setVehicleModel("");
    setService("");
    setDate("");
  }

  return (
    <main className="booking-page">
      <h1>Book Service Appointment</h1>

      <div className="booking-form">
        <label htmlFor="name">Customer Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter customer name"
        />

        <label htmlFor="vehicleNumber">Vehicle Number</label>
        <input
          id="vehicleNumber"
          type="text"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
          placeholder="e.g. KA01AB1234"
        />

        <label htmlFor="vehicleModel">Vehicle Model</label>
        <input
          id="vehicleModel"
          type="text"
          value={vehicleModel}
          onChange={(e) => setVehicleModel(e.target.value)}
          placeholder="e.g. Honda City"
        />

        <label htmlFor="service">Select Service</label>
        <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">-- Select Service --</option>
          {SERVICES.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>

        <label htmlFor="date">Appointment Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleBooking}>Book Appointment</button>
      </div>

      <section className="booking-details">
        <h3>Booking Details</h3>

        <p>Customer: <strong>{name || "-"}</strong></p>
        <p>Vehicle No: <strong>{vehicleNumber || "-"}</strong></p>
        <p>Model: <strong>{vehicleModel || "-"}</strong></p>
        <p>Service: <strong>{service || "-"}</strong></p>
        <p>Date: <strong>{date || "-"}</strong></p>
        <p>Estimated Bill: <strong>{service ? `₹${priceOf(service)}` : "-"}</strong></p>
      </section>
    </main>
  );
}

export default Booking;
