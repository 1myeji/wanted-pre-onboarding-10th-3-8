import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>원티드 과제</h1>
    </header>
  );
}

export default Header;

const headerStyle = {
  padding: '20px 0',
  lineHeight: '1.5em',
};
const titleStyle = {
  fontSize: '5rem',
  fontWeight: '600',
  marginBottom: '2rem',
  lineHeight: '1em',
  color: '#ececec',
  textAlign: 'center' as const,
};
