import React from 'react';
import { FaTimes, FaUpload, FaCamera } from 'react-icons/fa';
import '../App.css';

const AddMemberScreen = () => (
  <div className="member-registration">
    <div className="registration-header">
      <div className="user-section">
        <span className="user-label">User:</span>
        <input type="text" className="user-input" />
      </div>
      <h2 className="page-title">New Member Registration</h2>
      <button className="search-btn">Search</button>
    </div>
    <div className="registration-content">
      {/* Left Panel - Personal Information */}
      <div className="left-panel">
        <div className="photo-section">
          <div className="photo-container">
            <div className="photo-placeholder">
              {/* Photo will be displayed here */}
            </div>
            <div className="photo-controls">
              <button className="control-btn cancel"><FaTimes style={{marginRight: 6}} /> Cancel</button>
              <button className="control-btn upload"><FaUpload style={{marginRight: 6}} /> Upload</button>
              <button className="control-btn webcam"><FaCamera style={{marginRight: 6}} /> Capture Webcam</button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Account Open Date</label>
          <div className="date-input">
            <input type="date" value="2024-11-23" />
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Height</label>
            <input type="number" placeholder="0" />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input type="number" placeholder="0" />
          </div>
        </div>
        <div className="form-group">
          <label>Relative</label>
          <div className="relative-row">
            <select className="relative-select">
              <option>S/O</option>
              <option>D/O</option>
              <option>W/O</option>
            </select>
            <input type="text" className="relative-name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Contact #</label>
            <div className="contact-row">
              <span className="country-code">+92</span>
              <input type="tel" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Member Status</label>
          <select>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspended</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Day Timing</label>
            <select>
              <option>Select</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>All Day</option>
            </select>
          </div>
          <div className="form-group">
            <label>Time</label>
            <select>
              <option>None</option>
              <option>6:00 AM - 10:00 AM</option>
              <option>5:00 PM - 9:00 PM</option>
            </select>
            <button className="add-time-btn">+</button>
          </div>
        </div>
      </div>
      {/* Center - Biometric Device (omitted for brevity) */}
      {/* Right Panel - Package & Payment Information (omitted for brevity) */}
    </div>
  </div>
);

export default AddMemberScreen; 