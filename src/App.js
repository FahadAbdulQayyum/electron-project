import { useState } from 'react';
import './App.css';

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
            <div className="icon-orange">👤</div>
          </div>
          <div className="card-number">0</div>
          <div className="card-title">Total New Admissions</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange">📊</div>
          </div>
          <div className="card-number">10</div>
          <div className="card-title">Total Member Attendance</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">
            <div className="icon-orange">💰</div>
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
            <div className="icon-orange">🏦</div>
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
            <div className="icon-orange">💵</div>
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
            <div className="icon-orange">🛒</div>
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
            <div className="icon-orange">📈</div>
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
            ➤ JOIN NOW
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
          💪<br/>
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
            YOUR<br/>GYM<br/>LOGO
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
              🏠 Dashboard
            </button>
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={() => setCurrentView('dashboard')}>
                Daily Dashboard
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('home')}>
                Software Screen
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button 
              className={`nav-btn ${currentView === 'members' ? 'active' : ''}`}
              onClick={() => setCurrentView('members')}
            >
              👥 Members
            </button>
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={() => setCurrentView('add-member')}>
                Add New Member
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('add-trainer')}>
                Add Trainer/Helper
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('add-packages')}>
                Add Packages
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('check-attendance')}>
                Check Member Attendance
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('daily-attendance')}>
                Daily Attendance Report
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('all-members')}>
                Show all Member Detail
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('daily-sales')}>
                Daily Sales Report
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('add-fee-payment')}>
                Add Fee Payment
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('fee-expiry')}>
                Fee Expiry Member Report
              </div>
              <div className="dropdown-item" onClick={() => setCurrentView('due-fee')}>
                Due Fee Report
              </div>
            </div>
          </div>
          <button 
            className={`nav-btn ${currentView === 'pos' ? 'active' : ''}`}
            onClick={() => setCurrentView('pos')}
          >
            🛒 POS
          </button>
          <button 
            className={`nav-btn ${currentView === 'accounts' ? 'active' : ''}`}
            onClick={() => setCurrentView('accounts')}
          >
            🏦 Bank Accounts
          </button>
          <button 
            className={`nav-btn ${currentView === 'expenditure' ? 'active' : ''}`}
            onClick={() => setCurrentView('expenditure')}
          >
            📊 Expenditure
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
          <div className="placeholder-view">
            <h2>Add New Member</h2>
            <p>Add new member functionality coming soon...</p>
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
