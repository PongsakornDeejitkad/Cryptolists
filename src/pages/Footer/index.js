import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/coins.png';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <ul class="footer-nav">
          <li class="footer-item">
            <a class="footer-link" href="#">
              About
            </a>
          </li>
          <li class="footer-item">
            <a class="footer-link" href="#">
              Pricing
            </a>
          </li>
          <li class="footer-item">
            <a class="footer-link" href="#">
              Terms of Use
            </a>
          </li>
          <li class="footer-item">
            <a class="footer-link" href="#">
              Privacy Policy
            </a>
          </li>
          <li class="footer-item">
            <a class="footer-link" href="#">
              Careers
            </a>
          </li>
          <li class="footer-item">
            <Link class="footer-link" to="/updateOurShop">
              Update OurShop
            </Link>
          </li>
          <li class="footer-item">
            <a class="footer-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img className="footer-img" src={logo}></img>
      </div>
      <div className="footer-end">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sollicitudin neque condimentum, auctor dolor vel, feugiat justo. Fusce
          vitae arcu sit amet quam consequat blandit. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Curabitur et maximus leo.
          Aenean in efficitur purus. Donec aliquet dapibus nisl eu porta.
          Aliquam nec cursus magna. In congue sagittis elit, ut lacinia lectus
        </p>
      </div>
    </div>
  );
}
