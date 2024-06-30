import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">Home</Link>
      <Link to="/mypage">My Page</Link>
    </footer>
  );
}

export default Footer;