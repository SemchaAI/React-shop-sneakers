import { ReactComponent as Cart } from "../../img/cart.svg";
import { ReactComponent as Favorite } from "../../img/favorite.svg";
import { ReactComponent as User } from "../../img/user.svg";
import logoPng from "../../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <div className="leftBar">
        <img
          width={40}
          height={40}
          // src={require("./img/logo.png")}
          src={logoPng}
          alt="sneakers logo"
        />
        <div className="siteInfo">
          <h2>React sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="rightBar">
        <li className="cartPrice">
          <Link to="/cart">
            <Cart />
          </Link>
          <p>1205 руб.</p>
        </li>
        <li className="favorite">
          <Favorite />
        </li>
        <li>
          <User />
        </li>
      </ul>
    </header>
  );
};

export default Header;
