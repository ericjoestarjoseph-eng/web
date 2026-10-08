import { useEffect, useMemo, useState } from "react";
import { supabase } from "../supabase";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatCurrency(value) {
  return currencyFormatter.format(Number(value || 0));
}

function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ServiceHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBookings() {
    setLoading(true);

    const { data, error } = await supabase
      .from("service_bookings")
      .select("*")
      .order("id", { ascending: false });

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Failed to retrieve service history");
      return;
    }

    setBookings(data ?? []);
  }

  useEffect(() => {
    getBookings();
  }, []);

  const summary = useMemo(() => {
    if (!bookings.length) {
      return {
        totalRevenue: 0,
        averageBill: 0,
        servicesCompleted: 0,
        latestInvoice: 0,
      };
    }

    const totalRevenue = bookings.reduce((sum, booking) => sum + Number(booking.amount || 0), 0);
    const latestInvoice = bookings.reduce((latest, booking) => {
      const currentDate = new Date(booking.service_date || 0).getTime();
      const existingDate = new Date(latest.service_date || 0).getTime();
      return currentDate > existingDate ? booking : latest;
    }, bookings[0]);

    return {
      totalRevenue,
      averageBill: totalRevenue / bookings.length,
      servicesCompleted: bookings.length,
      latestInvoice: Number(latestInvoice.amount || 0),
    };
  }, [bookings]);

  return (
    <main className="history-page">
      <div className="history-header">
        <div>
          <p className="eyebrow">Finance overview</p>
          <h1>Billing Dashboard</h1>
        </div>

        <button className="history-button" onClick={getBookings} disabled={loading}>
          {loading ? "Loading..." : "Refresh billing"}
        </button>
      </div>

      <section className="billing-summary">
        <article className="summary-card total">
          <span>Total Revenue</span>
          <strong>{formatCurrency(summary.totalRevenue)}</strong>
        </article>

        <article className="summary-card">
          <span>Services Completed</span>
          <strong>{summary.servicesCompleted}</strong>
        </article>

        <article className="summary-card">
          <span>Average Bill</span>
          <strong>{formatCurrency(summary.averageBill)}</strong>
        </article>

        <article className="summary-card">
          <span>Latest Invoice</span>
          <strong>{formatCurrency(summary.latestInvoice)}</strong>
        </article>
      </section>

      {bookings.length === 0 ? (
        <div className="empty-state">
          <h2>No billing records found</h2>
          <p>Book a service appointment to populate the billing dashboard.</p>
        </div>
      ) : (
        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Vehicle No</th>
                <th>Model</th>
                <th>Service</th>
                <th>Date</th>
                <th>Bill</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.customer_name}</td>
                  <td>{booking.vehicle_number}</td>
                  <td>{booking.vehicle_model}</td>
                  <td>{booking.service_type}</td>
                  <td>{formatDate(booking.service_date)}</td>
                  <td>{formatCurrency(booking.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default ServiceHistory;
