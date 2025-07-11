import React from 'react';
import '../App.css';

const CheckMemberAttendanceScreen = () => (
  <div className="check-member-attendance-section">
    <div className="attendance-header-row" style={{justifyContent: 'space-between'}}>
      <div className="attendance-member-bar">
        <input type="text" placeholder="M-ID" className="member-id-input" />
        <input type="text" placeholder="Member Name" className="member-name-input" />
        <button className="attendance-check-btn">Select Member</button>
      </div>
      <div className="attendance-date-bar">
        <label style={{marginRight: 10, fontWeight: 'bold'}}>To Month</label>
        <select className="month-select">
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <label style={{margin: '0 10px 0 20px', fontWeight: 'bold'}}>To Year</label>
        <input type="text" className="year-input" placeholder="2024" style={{width: 70}} />
        <button className="attendance-check-btn">Check</button>
      </div>
    </div>
    <div className="attendance-table-wrapper">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Date</th>
            <th>Day</th>
            <th>Attendance Time</th>
          </tr>
        </thead>
        <tbody>
          {/* No data rows for now */}
        </tbody>
      </table>
    </div>
  </div>
);

export default CheckMemberAttendanceScreen; 