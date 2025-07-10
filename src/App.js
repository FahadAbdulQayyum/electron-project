import './App.css';

function App() {
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
            <button className="nav-btn active">
              🏠 Dashboard
            </button>
            <div className="dropdown-content">
              <div className="dropdown-item">Daily Dashboard</div>
              <div className="dropdown-item">Software Screen</div>
            </div>
          </div>
          <button className="nav-btn">
            👥 Members
          </button>
          <button className="nav-btn">
            🛒 POS
          </button>
          <button className="nav-btn">
            🏦 Bank Accounts
          </button>
          <button className="nav-btn">
            📊 Expenditure
          </button>
        </nav>

        <div className="window-controls">
          <button className="control-btn">−</button>
          <button className="control-btn">×</button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Footer */}
      <footer className="footer">
        <div>Copyright, all rights reserved by SOFTWEBPK</div>
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
