import React from 'react';
import '../App.css';

const AddTrainerScreen = () => (
  <div className="trainer-helper-section">
    <div className="trainer-helper-left">
      <h3>Trainer / Helper</h3>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div className="form-group" style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
        <label style={{margin: 0}}><input type="checkbox" style={{marginRight: 5}} /> Personal Trainer</label>
        <label style={{margin: 0}}><input type="checkbox" style={{marginRight: 5}} /> Gym Trainer</label>
      </div>
      <div className="form-group">
        <label>Contact #</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select>
          <option>Active</option>
          <option>Inactive</option>
          <option>Deactive</option>
        </select>
      </div>
      <div className="trainer-helper-actions">
        <button className="btn-orange-outline">Add New</button>
        <button className="btn-orange">Save</button>
        <button className="btn-green">Update</button>
        <button className="btn-red">Refresh</button>
      </div>
    </div>
    <div className="trainer-helper-right">
      <h3>Trainer/Helper Detail</h3>
      <div className="trainer-helper-table-wrapper">
        <table className="trainer-helper-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Contact #</th>
              <th>Personal Trainer</th>
              <th>Gym Trainer</th>
              <th>Status</th>
              <th>Edit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>.</td>
              <td>0000</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Deactive</td>
              <td><button className="edit-btn">Edit</button></td>
              <td><span className="table-x">✗</span></td>
            </tr>
            <tr>
              <td>2</td>
              <td><span className="highlighted">AHMED KHAN</span></td>
              <td>03128888885</td>
              <td>No</td>
              <td>Yes</td>
              <td>Active</td>
              <td><button className="edit-btn">Edit</button></td>
              <td><span className="table-x">✗</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td>RIJJA IBRAHIM</td>
              <td>0</td>
              <td>Yes</td>
              <td>No</td>
              <td>Active</td>
              <td><button className="edit-btn">Edit</button></td>
              <td><span className="table-x">✗</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td>QAIS DURANI</td>
              <td>0</td>
              <td>Yes</td>
              <td>No</td>
              <td>Active</td>
              <td><button className="edit-btn">Edit</button></td>
              <td><span className="table-x">✗</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AddTrainerScreen; 