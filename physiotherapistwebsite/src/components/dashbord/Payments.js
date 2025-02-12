import React from 'react';
import './Payments.css';

function Payments() {
  return (
    <div className="payments-container">
    <h1>Payments</h1>

    {/* Payment History */}
    <section className="payment-history">
      <h2>Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-01-10</td>
            <td>Doctor Consultation</td>
            <td>$120</td>
            <td className="status success">Paid</td>
          </tr>
          <tr>
            <td>2024-02-14</td>
            <td>Lab Test</td>
            <td>$80</td>
            <td className="status pending">Pending</td>
          </tr>
          <tr>
            <td>2024-03-05</td>
            <td>Prescription</td>
            <td>$50</td>
            <td className="status failed">Failed</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* Add Payment */}
    <section className="add-payment">
      <h2>Add Payment</h2>
      <form>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" placeholder="Enter description" />

        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" placeholder="Enter amount" />

        <label htmlFor="date">Date</label>
        <input type="date" id="date" />

        <button type="submit" className="btn-submit">
          Add Payment
        </button>
      </form>
    </section>
  </div>
  );
}

export default Payments;
