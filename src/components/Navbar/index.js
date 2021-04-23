import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/coins.png';
import { useState } from 'react';

export default function Navbar() {
  const market = event => {
    event.preventDefault();
    window.scrollTo({
      top: 950,
      behavior: 'smooth',
    });
  };
  const [navFix, setNavFix] = useState('');

  const recommend = event => {
    event.preventDefault();
    window.scrollTo({
      top: 1900,
      behavior: 'smooth',
    });
  };
  const otherShop = event => {
    event.preventDefault();
    window.scrollTo({
      top: 2750,
      behavior: 'smooth',
    });
  };

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
          <li className="nav-item-nav  ">
            <button class="nav-link-nav nav-btn-nav" onClick={market}>
              Market
            </button>
          </li>
          <li className="nav-item-nav ">
            <button class="nav-link-nav nav-btn-nav" onClick={recommend}>
              Recommend
            </button>
          </li>
          <li className="nav-item-nav  ">
            <button class="nav-link-nav nav-btn-nav" onClick={otherShop}>
              Other Shop
            </button>
          </li>
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
