import React from 'react';
import '../App.css';

const AddPackageScreen = () => (
  <div className="trainer-helper-section">
    <div className="trainer-helper-left">
      <h3>Add New Package</h3>
      <div className="form-group">
        <label>Package Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Package Price</label>
        <input type="number" />
      </div>
      <div className="form-group">
        <label>Package Gender</label>
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="trainer-helper-actions">
        <button className="btn-orange-outline">New Package</button>
        <button className="btn-orange">Save</button>
        <button className="btn-green">Update</button>
        <button className="btn-red">Refresh</button>
      </div>
    </div>
    <div className="trainer-helper-right">
      <h3>Packages Detail</h3>
      <div className="trainer-helper-table-wrapper">
        <table className="trainer-helper-table">
          <thead>
            <tr>
              <th>SNO</th>
              <th>Package Name</th>
              <th>Price</th>
              <th>Package Gender</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="highlighted">DEFAULT PACKAGE</td>
              <td>2500</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>GYM + CARDIO</td>
              <td>5000</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>PERSONAL TRAINING</td>
              <td>8000</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>TARGET TRAINING</td>
              <td>12000</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>STRENGHT</td>
              <td>2500</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>CARDIO</td>
              <td>2500</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>GROUP TRAINING</td>
              <td>6000</td>
              <td>Male</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>AEROBIC</td>
              <td>3000</td>
              <td>Female</td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AddPackageScreen; 