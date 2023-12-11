import { NavLink } from "react-router-dom";
import telegramIcon from "@images/social-media/telegram.svg";
import vkIcon from "@images/social-media/vk.svg";
import "./_index.scss";

const Menu = () => {
  return (
    <div className="header__menu menu">
      <div className="menu__body">
        <ul className="menu__items">
          <li>
            <NavLink to="/" className="menu__item">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="menu__item">
              Магазин
            </NavLink>
          </li>
        </ul>
        <ul className="menu__social-media">
          <li>
            <a
              href="https://t.me/overtonehandpan"
              className="menu__social-media-icon"
            >
              <img src={telegramIcon} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/overtonehp"
              className="menu__social-media-icon"
            >
              <img src={vkIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
