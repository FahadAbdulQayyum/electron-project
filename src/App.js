import { useState } from 'react';
import './App.css';
import { FaUserPlus, FaChartBar, FaMoneyBillWave, FaUniversity, FaHandHoldingUsd, FaShoppingCart, FaChartLine, FaTachometerAlt, FaUsers, FaCashRegister, FaBank, FaFileInvoiceDollar, FaUserCheck, FaRegCalendarCheck, FaListAlt, FaFileAlt, FaMoneyCheckAlt, FaExclamationCircle, FaCamera, FaUpload, FaTimes } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const DailyDashboard = () => (
    <div className="dashboard">
      {/* Date Range Selector */}
      <div className="date-selector">
        <div className="date-group">
          <label>From Static Report</label>
          <div className="date-input">
            <input type="date" value="2024-11-23" />
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        <div className="date-group">
          <label>To Static Report</label>
          <div className="date-input">
            <input type="date" value="2024-11-23" />
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        <button className="show-report-btn">Show Report</button>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaUserPlus /></div>
          </div>
          <div className="card-number">0</div>
          <div className="card-title">Total New Admissions</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaChartBar /></div>
          </div>
          <div className="card-number">10</div>
          <div className="card-title">Total Member Attendance</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaMoneyBillWave /></div>
          </div>
          <div className="card-stats">
            <div className="stat-row">
              <span>Cash:</span>
              <span>0</span>
            </div>
            <div className="stat-row">
              <span>Online:</span>
              <span>0</span>
            </div>
          </div>
          <div className="card-title">Total New Admission Received Amount</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaUniversity /></div>
          </div>
          <div className="card-stats">
            <div className="stat-row">
              <span>Cash:</span>
              <span>0</span>
            </div>
            <div className="stat-row">
              <span>Online:</span>
              <span>0</span>
            </div>
          </div>
          <div className="card-title">Monthly Fee Received Amount</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaHandHoldingUsd /></div>
          </div>
          <div className="card-stats">
            <div className="stat-row">
              <span>Cash:</span>
              <span>0</span>
            </div>
            <div className="stat-row">
              <span>Online:</span>
              <span>0</span>
            </div>
          </div>
          <div className="card-title">Total Trainer Commission Amount</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaShoppingCart /></div>
          </div>
          <div className="card-stats">
            <div className="stat-row">
              <span>Cash:</span>
              <span>0</span>
            </div>
            <div className="stat-row">
              <span>Online:</span>
              <span>0</span>
            </div>
          </div>
          <div className="card-title">Total Point Of Sale Received Amount</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange"><FaChartLine /></div>
          </div>
          <div className="card-stats">
            <div className="stat-row">
              <span>Cash:</span>
              <span>0</span>
            </div>
            <div className="stat-row">
              <span>Online:</span>
              <span>0</span>
            </div>
          </div>
          <div className="card-title">Total Expenditure Amount</div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-item">
          <span className="summary-label">Total Cash Received:</span>
          <span className="summary-value">0</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Cash Received for Trainer Commission:</span>
          <span className="summary-value">0</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Cash Expenses:</span>
          <span className="summary-value">0</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Cash in Hand:</span>
          <span className="summary-value">0</span>
        </div>
      </div>
    </div>
  );

  const HeroSection = () => (
    <main className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            Don't Wait<br/>
            Get In <span className="highlight">Shape</span> Today
          </h1>
          <p className="hero-subtitle">
            START YOUR TRAININGS WITH OUR
          </p>
          <p className="hero-description">
            PROFESSIONAL<br/>
            TRAINERS
          </p>
          <button className="join-btn">
            <FaUserPlus style={{marginRight: 8}} /> JOIN NOW
          </button>
        </div>
        
        <div className="hero-right">
          <div className="hero-image">
            {/* Placeholder for trainer image */}
          </div>
        </div>
      </div>

      {/* Right Logo */}
      <div className="right-logo">
        <div className="right-logo-text">
          <FaTachometerAlt style={{fontSize: '2rem', color: '#e67e22'}} /><br/>
          GYMM
        </div>
      </div>
    </main>
  );

  return (
    <div className="App">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo-section">
          <div className="logo">
            <FaTachometerAlt style={{fontSize: '1.5rem', color: '#fff'}} /><br/>
            GYM LOGO
          </div>
          <div className="gym-title">
            GYM Management System
          </div>
        </div>
        
        <nav className="nav-buttons">
          <div className="dropdown">
            <button 
              className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentView('dashboard')}
            >
              <FaTachometerAlt style={{marginRight: 6}} /> Dashboard
            </button>
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={() => setCurrentView('dashboard')}>
                <FaRegCalendarCheck style={{marginRight: 6}} /> Daily Dashboard
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('home')}>
                <FaFileAlt style={{marginRight: 6}} /> Software Screen
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button 
              className={`nav-btn ${currentView === 'members' ? 'active' : ''}`}
              onClick={() => setCurrentView('members')}
            >
              <FaUsers style={{marginRight: 6}} /> Members
            </button>
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={() => setCurrentView('add-member')}>
                <FaUserPlus style={{marginRight: 6}} /> Add New Member
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('add-trainer')}>
                <FaUserCheck style={{marginRight: 6}} /> Add Trainer/Helper
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('add-packages')}>
                <FaListAlt style={{marginRight: 6}} /> Add Packages
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('check-attendance')}>
                <FaFileInvoiceDollar style={{marginRight: 6}} /> Check Member Attendance
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('daily-attendance')}>
                <FaRegCalendarCheck style={{marginRight: 6}} /> Daily Attendance Report
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('all-members')}>
                <FaUsers style={{marginRight: 6}} /> Show all Member Detail
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('daily-sales')}>
                <FaFileAlt style={{marginRight: 6}} /> Daily Sales Report
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('add-fee-payment')}>
                <FaMoneyCheckAlt style={{marginRight: 6}} /> Add Fee Payment
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('fee-expiry')}>
                <FaExclamationCircle style={{marginRight: 6}} /> Fee Expiry Member Report
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('due-fee')}>
                <FaFileInvoiceDollar style={{marginRight: 6}} /> Due Fee Report
              </div>
            </div>
          </div>
          <button 
            className={`nav-btn ${currentView === 'pos' ? 'active' : ''}`}
            onClick={() => setCurrentView('pos')}
          >
            <FaCashRegister style={{marginRight: 6}} /> POS
          </button>
          <button 
            className={`nav-btn ${currentView === 'accounts' ? 'active' : ''}`}
            onClick={() => setCurrentView('accounts')}
          >
            <BsBank2 style={{marginRight: 6}} /> Bank Accounts
          </button>
          <button 
            className={`nav-btn ${currentView === 'expenditure' ? 'active' : ''}`}
            onClick={() => setCurrentView('expenditure')}
          >
            <FaChartBar style={{marginRight: 6}} /> Expenditure
          </button>
        </nav>

        <div className="window-controls">
          <button className="control-btn">−</button>
          <button className="control-btn">×</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {currentView === 'dashboard' && <DailyDashboard />}
        {currentView === 'home' && <HeroSection />}
        {currentView === 'members' && (
          <div className="placeholder-view">
            <h2>Members Management</h2>
            <p>Select an option from the Members dropdown menu above.</p>
          </div>
        )}
        {currentView === 'add-member' && (
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

              {/* Center - Biometric Device */}
              {/* <div className="center-panel">
                <div className="biometric-device">
                  <div className="device-screen">
                    <div className="screen-header">Error</div>
                    <div className="screen-content">
                      <div className="time-display">18:21</div>
                    </div>
                  </div>
                  <div className="device-brand">ZKTeco</div>
                </div>
                <div className="fingerprint-guide">
                  <div className="hand-diagram">
                    <div className="hand left-hand">
                      <span className="finger-number">0</span>
                      <span className="finger-number">1</span>
                      <span className="finger-number">2</span>
                      <span className="finger-number">3</span>
                      <span className="finger-number">4</span>
                    </div>
                    <div className="hand right-hand">
                      <span className="finger-number">5</span>
                      <span className="finger-number">6</span>
                      <span className="finger-number">7</span>
                      <span className="finger-number">8</span>
                      <span className="finger-number">9</span>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Right Panel - Package & Payment Information */}
              <div className="right-panel">
                <div className="packages-section">
                  <label>Packages</label>
                  <div className="gender-options">
                    <label><input type="radio" name="packageGender" defaultChecked /> All</label>
                    <label><input type="radio" name="packageGender" /> Male</label>
                    <label><input type="radio" name="packageGender" /> Female</label>
                  </div>
                  <select className="package-select">
                    <option>DEFAULT PACKAGE</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Packages Expiry Date</label>
                  <div className="date-input">
                    <input type="date" value="2024-12-23" />
                    <span className="dropdown-arrow">▼</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Trainer/Helper</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>

                <div className="fees-section">
                  <div className="fee-row">
                    <div className="fee-group">
                      <label>Admission Fee</label>
                      <input type="number" value="0" className="highlighted-fee" />
                    </div>
                    <div className="fee-group">
                      <label>Monthly Fee</label>
                      <input type="number" value="2500" />
                    </div>
                  </div>

                  <div className="fee-row">
                    <div className="fee-group">
                      <label>Trainer Fee</label>
                      <input type="number" value="0" />
                    </div>
                    <div className="fee-group">
                      <label>Trainer Commission</label>
                      <input type="number" value="0" />
                    </div>
                  </div>

                  <div className="gym-commission">
                    <label>Gym Commission: <span>0</span></label>
                  </div>

                  <div className="total-amount">
                    <label>Total Amount:</label>
                    <span className="amount">2500</span>
                  </div>
                </div>

                <div className="payment-section">
                  <div className="form-group">
                    <label>Select Account</label>
                    <select className="account-select">
                      <option>Select</option>
                    </select>
                  </div>

                  <div className="payment-row">
                    <div className="form-group">
                      <label>Cheque No</label>
                      <input type="text" />
                    </div>
                    <div className="form-group">
                      <label>Payment</label>
                      <input type="number" />
                    </div>
                  </div>

                  <div className="balance">
                    <label>Balance:</label>
                    <span className="balance-amount">0</span>
                  </div>
                </div>

                <button className="save-member-btn">Save New Member</button>
              </div>
            </div>
          </div>
        )}
        {currentView === 'add-trainer' && (
          <div className="placeholder-view">
            <h2>Add Trainer/Helper</h2>
            <p>Add trainer/helper functionality coming soon...</p>
          </div>
        )}
        {currentView === 'add-packages' && (
          <div className="placeholder-view">
            <h2>Add Packages</h2>
            <p>Add packages functionality coming soon...</p>
          </div>
        )}
        {currentView === 'check-attendance' && (
          <div className="placeholder-view">
            <h2>Check Member Attendance</h2>
            <p>Check member attendance functionality coming soon...</p>
          </div>
        )}
        {currentView === 'daily-attendance' && (
          <div className="placeholder-view">
            <h2>Daily Attendance Report</h2>
            <p>Daily attendance report functionality coming soon...</p>
          </div>
        )}
        {currentView === 'all-members' && (
          <div className="placeholder-view">
            <h2>Show all Member Detail</h2>
            <p>Show all member details functionality coming soon...</p>
          </div>
        )}
        {currentView === 'daily-sales' && (
          <div className="placeholder-view">
            <h2>Daily Sales Report</h2>
            <p>Daily sales report functionality coming soon...</p>
          </div>
        )}
        {currentView === 'add-fee-payment' && (
          <div className="placeholder-view">
            <h2>Add Fee Payment</h2>
            <p>Add fee payment functionality coming soon...</p>
          </div>
        )}
        {currentView === 'fee-expiry' && (
          <div className="placeholder-view">
            <h2>Fee Expiry Member Report</h2>
            <p>Fee expiry member report functionality coming soon...</p>
          </div>
        )}
        {currentView === 'due-fee' && (
          <div className="placeholder-view">
            <h2>Due Fee Report</h2>
            <p>Due fee report functionality coming soon...</p>
          </div>
        )}
        {currentView === 'pos' && (
          <div className="placeholder-view">
            <h2>Point of Sale</h2>
            <p>POS functionality coming soon...</p>
          </div>
        )}
        {currentView === 'accounts' && (
          <div className="placeholder-view">
            <h2>Bank Accounts</h2>
            <p>Bank accounts functionality coming soon...</p>
          </div>
        )}
        {currentView === 'expenditure' && (
          <div className="placeholder-view">
            <h2>Expenditure Management</h2>
            <p>Expenditure functionality coming soon...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>
          Copyright, all rights reserved by{' '}
          <a 
            href="https://github.com/FahadAbdulQayyum" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{color: '#4a90e2', textDecoration: 'none'}}
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            FahadAbdulQayyum
          </a>
        </div>
        <div>
          <span>App Code: FHD-1998</span>
          <span style={{marginLeft: '20px'}}>Help Line 
          <a 
            href="https://wa.me/+923232846250" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{color: '#4a90e2', textDecoration: 'none'}}
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            :&nbsp; +923232846250
          </a>
          </span>
        </div>
        <div>Build your software with us!</div>
      </footer>
    </div>
  );
}

export default App;
