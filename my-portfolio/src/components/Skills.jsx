import React from 'react';

const Skills = () => (
  <section style={sectionStyle}>
    <h2>Skills</h2>
    <ul style={listStyle}>
      <li>JavaScript (React, Node.js)</li>
      <li>Python (Django, Flask)</li>
      <li>Databases (MySQL, MongoDB)</li>
    </ul>
  </section>
);

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#ffffff',
  textAlign: 'center',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

export default Skills;
