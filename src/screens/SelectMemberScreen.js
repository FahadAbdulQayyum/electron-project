import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const SelectMemberScreen = () => (
  <div className="select-member-container">
    <div className="select-member-header">
      <span className="select-member-title">Search by Name or Contact (only active members)</span>
      <div className="select-member-search-row">
        <input
          type="text"
          className="select-member-search-input"
          placeholder="Enter name or contact..."
        />
        <button className="select-member-search-btn">
          <FaSearch style={{ marginRight: 6 }} /> Search
        </button>
      </div>
    </div>
    <div className="select-member-table-wrapper">
      <table className="select-member-table">
        <thead>
          <tr>
            <th>SNO</th>
            <th>Acc#</th>
            <th>Member Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Commission</th>
            <th>Trainer Fee</th>
            <th>Trainer Name</th>
            <th>Expiry</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder row */}
          <tr>
            <td colSpan="9" style={{ textAlign: 'center', color: '#888' }}>
              No data to display.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SelectMemberScreen; 