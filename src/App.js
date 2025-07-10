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
          <button 
            className={`nav-btn ${currentView === 'members' ? 'active' : ''}`}
            onClick={() => setCurrentView('members')}
          >
            👥 Members
          </button>
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
            <p>Members functionality coming soon...</p>
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
          <span>App Code: RG-408</span>
          <span style={{marginLeft: '20px'}}>Help Line 0092-315-1150070</span>
        </div>
        <div>Activate Windows - Go to Settings</div>
      </footer>
    </div>
  );
}

export default App;
