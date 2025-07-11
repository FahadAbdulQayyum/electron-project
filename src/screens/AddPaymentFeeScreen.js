import React, { useState } from 'react';
import '../App.css';
import SelectMemberScreen from './SelectMemberScreen';

const AddPaymentFeeScreen = () => {
  const [showSelectMember, setShowSelectMember] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Placeholder data for summary
  const summary = {
    gymName: 'FITNESS',
    location: 'Karachi',
    phone: '0344-3443441',
    member: '277-m zahid',
    paymentDate: '23-Nov-2024',
    expiryDate: '22-Dec-2024',
    prevBalance: 0,
    monthlyFee: 3750,
    trainerFee: 0,
    totalAmount: 3750,
    waived: 0,
    payFee: 0,
    payMode: '',
    balance: 3750,
  };

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
        <button className="pay-fee-btn" onClick={() => setShowSummary(true)}>Pay Fee</button>
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
      {showSummary && (
        <div className="modal-overlay" onClick={() => setShowSummary(false)}>
          <div className="modal-content payment-summary-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowSummary(false)}>×</button>
            <div className="summary-header">Fee Payment</div>
            <div className="summary-box">
              <div className="summary-gym-title"><b>{summary.gymName}</b></div>
              <div className="summary-location">{summary.location}</div>
              <div className="summary-phone">{summary.phone}</div>
              <hr className="summary-hr" />
              <div className="summary-row"><b>Member:</b> <span>{summary.member}</span></div>
              <div className="summary-row"><b>Payment Date:</b> <span>{summary.paymentDate}</span></div>
              <div className="summary-row"><b>Fee Expiry Date:</b> <span>{summary.expiryDate}</span></div>
              <div className="summary-row"><b>Previous Balance:</b> <span>{summary.prevBalance}</span></div>
              <div className="summary-row"><b>Monthly Fee:</b> <span>{summary.monthlyFee}</span></div>
              <div className="summary-row"><b>Trainer Fee:</b> <span>{summary.trainerFee}</span></div>
              <div className="summary-row"><b>Total Amount:</b> <span>{summary.totalAmount}</span></div>
              <div className="summary-row"><b>Waived Amount:</b> <span>{summary.waived}</span></div>
              <div className="summary-row"><b>Pay Fee:</b> <span>{summary.payFee}</span></div>
              <div className="summary-row"><b>Pay Mode:</b> <span>{summary.payMode}</span></div>
              <div className="summary-row"><b>Balance:</b> <span>{summary.balance}</span></div>
              <hr className="summary-hr" />
              <div className="summary-footer">Developed by FahadAbdulQayyum: 0323-2846250</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPaymentFeeScreen; 