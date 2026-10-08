import { useState } from "react";
import { supabase } from "../supabase";

function ServiceHistory() {
  const [bookings, setBookings] = useState([]);

  async function getBookings() {
    const { data, error } = await supabase
      .from("service_bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to retrieve service history");
      return;
    }

    setBookings(data);
  }

  const total = bookings.reduce((sum, b) => sum + Number(b.amount || 0), 0);

  return (
    <main className="history-page">
      <h1>Service History</h1>

      <button className="history-button" onClick={getBookings}>
        View Service History
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Vehicle No</th>
              <th>Model</th>
              <th>Service</th>
              <th>Date</th>
              <th>Bill (₹)</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.customer_name}</td>
                <td>{b.vehicle_number}</td>
                <td>{b.vehicle_model}</td>
                <td>{b.service_type}</td>
                <td>{b.service_date}</td>
                <td>{b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {bookings.length > 0 && (
        <p className="history-total">
          Total Billing: <strong>₹{total}</strong>
        </p>
      )}
    </main>
  );
}

export default ServiceHistory;
