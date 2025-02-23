import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="Footer-container">
        <div className="container footer-wrapper">
          <div className="footer-col-1">
            <h3>Get updates from Richard</h3>
            <p>New course alerts, discounts and free lessons</p>
            <span>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </span>
          </div>
          <div className="footer-col-2">
            <img src="./img/r-icon.svg" alt="r-icon" />
            <ul>
              <Link className="bottom-item">Email</Link>
              <Link className="bottom-item">Instagram</Link>
              <Link className="bottom-item">Facebook</Link>
              <Link className="bottom-item">Twitter</Link>
              <Link className="bottom-item">Image License Info</Link>
              <Link className="bottom-item">Powered by Webflow</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
