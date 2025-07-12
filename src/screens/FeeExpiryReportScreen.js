import React, { useState } from 'react';
import './FeeExpiryReportScreen.css';

const sampleData = [
  { sno: 1, regDate: '01-Jan-2024', name: 'John Doe', contact: '1234567890', admission: 500, monthly: 1000, trainer: 200, expiry: '23-Nov-2024' },
  { sno: 2, regDate: '15-Feb-2024', name: 'Jane Smith', contact: '9876543210', admission: 500, monthly: 1200, trainer: 250, expiry: '25-Nov-2024' },
];

function FeeExpiryReportScreen() {
  const [days, setDays] = useState(10);
  const [date, setDate] = useState('2024-11-23');
  const [data, setData] = useState(sampleData);

  return (
    <div className="fee-expiry-container">
      <div className="fee-expiry-header-row">
        <div className="fee-expiry-title">Fee Expiry Members Report</div>
        <a href="#" className="fee-expiry-link">Fee Expiry Report</a>
      </div>
      <div className="fee-expiry-row">
        <div className="fee-expiry-section">
          <label className="fee-expiry-label">Upcoming Expiration Fee (enter number of days)</label>
          <div className="fee-expiry-input-row">
            <input type="number" value={days} onChange={e => setDays(e.target.value)} className="fee-expiry-input" />
            <button className="fee-expiry-btn">Report</button>
          </div>
        </div>
        <div className="fee-expiry-section">
          <label className="fee-expiry-label">Today Expiry Report (only active members)</label>
          <div className="fee-expiry-input-row">
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="fee-expiry-input" />
            <button className="fee-expiry-btn">Report</button>
          </div>
        </div>
      </div>
      <div className="fee-expiry-table-section">
        <div className="fee-expiry-table-title">Fee Expiry Members Report</div>
        <div className="fee-expiry-table-wrapper">
          <table className="fee-expiry-table">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Registration Date</th>
                <th>Member Name</th>
                <th>Contact #</th>
                <th>Admission Fee</th>
                <th>Monthly Fee</th>
                <th>Trainer Fee</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr><td colSpan="8" style={{textAlign: 'center'}}>No data available</td></tr>
              ) : (
                data.map(row => (
                  <tr key={row.sno}>
                    <td>{row.sno}</td>
                    <td>{row.regDate}</td>
                    <td>{row.name}</td>
                    <td>{row.contact}</td>
                    <td>{row.admission}</td>
                    <td>{row.monthly}</td>
                    <td>{row.trainer}</td>
                    <td>{row.expiry}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FeeExpiryReportScreen; 