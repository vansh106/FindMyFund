import './App.css';

function App() {
  return (
    <div className="modern-container">
      <div className="content-wrapper">
        <h1 className="headline">
          <span className="gradient-text">Find My Fund</span>
          <br />
          <span className="subheadline">Your Fast-Track to Funding</span>
          <br />
          <span className="subheadline">Investors Database</span>
        </h1>
        
        <div className="feature-grid">
          <div className="feature-item">
            <span className="icon">📧</span>
            <span>Direct Email Access</span>
          </div>
          <div className="feature-item">
            <span className="icon">👥</span>
            <span>LinkedIn Profile</span>
          </div>
          <div className="feature-item">
            <span className="icon">📍</span>
            <span>Location of investors</span>
          </div>
          <div className="feature-item">
            <span className="icon">💼</span>
            <span>Designation of investors</span>
          </div>
        </div>

        <a 
          href="https://findmyfund.gumroad.com/l/rgiklh"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Instant Access
        </a>
      </div>
    </div>
  );
}

export default App;
