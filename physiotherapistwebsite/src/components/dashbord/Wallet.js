import React from 'react';
import './Wallet.css';

function Wallet() {
  return (
      <div className="wallet-page">
      <div className="wallet-header">
        <h1>My Wallet</h1>
        <p>View and manage your wallet balance and transactions.</p>
      </div>

      <div className="wallet-balance-card">
        <h2>Total Balance</h2>
        <p className="balance-amount">$1,234.56</p>
        <button className="add-funds-btn">Add Funds</button>
      </div>

      <div className="transaction-history">
        <h2>Transaction History</h2>
        <table className="transaction-table">
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
              <td>02/12/2023</td>
              <td>Consultation Payment</td>
              <td>- $50.00</td>
              <td className="status-completed">Completed</td>
            </tr>
            <tr>
              <td>01/12/2023</td>
              <td>Funds Added</td>
              <td>+ $200.00</td>
              <td className="status-completed">Completed</td>
            </tr>
            <tr>
              <td>28/11/2023</td>
              <td>Medication Purchase</td>
              <td>- $75.00</td>
              <td className="status-pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wallet;
