import React, { useState } from 'react';
import '../App.css';
import SelectMemberScreen from './SelectMemberScreen';

const AddPaymentFeeScreen = () => {
  const [showSelectMember, setShowSelectMember] = useState(false);

  return (
    <div className="add-payment-fee-section">
      <div className="payment-fee-header-row">
        <input type="text" placeholder="Member ID" className="fee-input" />
        <input type="text" placeholder="Member Name" className="fee-input" />
        <input type="text" placeholder="Fee Expiry" className="fee-input" />
        <input type="text" placeholder="Trainer Name" className="fee-input yellow-bg" />
        <input type="text" placeholder="Monthly Fee" className="fee-input yellow-bg" />
        <input type="text" placeholder="Trainer Comision" className="fee-input yellow-bg" />
        <input type="text" placeholder="Trainer Fee" className="fee-input yellow-bg" />
        <button className="attendance-check-btn" onClick={() => setShowSelectMember(true)}>Select Member</button>
        <button className="pay-fee-btn">Pay Fee</button>
      </div>
      <div className="fee-ledger-label">Fee Ledger</div>
      <div className="attendance-table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>SNO</th>
              <th>Expiry Date</th>
              <th>Monthly Fee</th>
              <th>Trainer Commision</th>
              <th>Trainer Fee</th>
              <th>Gym Commission</th>
              <th>Paid Amount</th>
              <th>Pay Date</th>
              <th>Waived</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* No data rows for now */}
          </tbody>
        </table>
      </div>
      <div className="fee-summary-row">
        <div>Total Monthly Fee: <span className="fee-green">0</span></div>
        <div>Total Trainer Commision: <span className="fee-green">0</span></div>
        <div>Total Trainer Fee: <span className="fee-green">0</span></div>
        <div>Total Gym Commision: <span className="fee-green">0</span></div>
        <div>Total Collect Fee: <span className="fee-green">0</span></div>
        <div>Total Waived Fee: <span className="fee-green">0</span></div>
        <div style={{marginLeft: 'auto', fontWeight: 'bold'}}>Total Balance Amount: <span className="fee-orange">0</span></div>
      </div>
      {showSelectMember && (
        <div className="modal-overlay" onClick={() => setShowSelectMember(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowSelectMember(false)}>×</button>
            <SelectMemberScreen />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPaymentFeeScreen; 