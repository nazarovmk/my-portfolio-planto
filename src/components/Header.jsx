import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="container head-wrap">
        <div className="header-col-1">
          <img
            src="/img/IMAGE.svg"
            alt="Richard icon"
            width={120}
            height={43}
          />
        </div>
        <div className="header-col-2">
          <ul>
            <li>
              <Link className="items" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="items">About</Link>
            </li>
            <li>
              <Link className="items">Features</Link>
            </li>
            <li>
              <Link className="items">Download</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
