import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/demo">DEMO</Link></li>
    </ul>
  )
}