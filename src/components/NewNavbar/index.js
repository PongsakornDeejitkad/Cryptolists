import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/coins.png';
import { useState } from 'react';

export default function NewNavbar() {
  const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '8rem',
    width: '100%',
    padding: '0.6rem',
    zIndex: '100',
    marginTop: '-5%',
  };
  return (
    <div>
      <nav className={''} style={nav}>
        <Link to="/">
          <div>
            <img src={logo} class="nav-logo-nav" />
            <span className="nav-name-nav ">CRYPTOLISTS</span>
          </div>
        </Link>

        <ul className="nav-links-nav">
          <li className="nav-item-nav ">
            <a className="nav-link-nav nav-link-btn-nav" href="#">
              Sing up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
