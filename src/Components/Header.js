import React from 'react';

const Header = ({ isDarkMode, toggleDarkMode }) => (
  <nav className={`navbar navbar-${isDarkMode ? 'dark' : 'light'} bg-${isDarkMode ? 'dark' : 'light'} mb-4`}>
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Notes App by Ayush Tayal</span>
      <div className="form-check form-switch">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="darkModeSwitch" 
          checked={isDarkMode} 
          onChange={toggleDarkMode} 
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
      </div>
    </div>
  </nav>
);

export default Header;
