import logo from "@images/header/logo.jpg";
import Menu from "@components/menu";
import { useSelector } from "react-redux";
import "./_index.scss";

const Header = () => {
  const { totalAmount } = useSelector((state) => state.basket);

  return (
    <header>
      <div className="header">
        <div className="header__container container">
          <a className="header__logo" href="/#">
            <img src={logo} alt=""></img>
          </a>
          <Menu totalAmount={totalAmount} />
        </div>
      </div>
    </header>
  );
};

export default Header;
