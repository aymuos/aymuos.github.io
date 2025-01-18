import React from 'react';

const Header = () => (
  <header style={headerStyle}>
    <h1>Hi, I'm Soumya Mukherjee</h1>
    <p>A Full-Stack Developer passionate about building great experiences.</p>
  </header>
);

const headerStyle = {
  textAlign: 'center',
  padding: '50px',
  backgroundColor: '#f5f5f5',
  color: '#ff6f61', // Bright splash of color
};

export default Header;
