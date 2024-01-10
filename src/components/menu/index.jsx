import React from "react";
import { NavLink } from "react-router-dom";
import telegramIcon from "@images/social-media/telegram.svg";
import vkIcon from "@images/social-media/vk.svg";
import "./_index.scss";

const Menu = (props) => {
  const { totalAmount } = { ...props };
  const [openMenu, setOpenMenu] = React.useState(false);

  const onClickMenuBurger = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="header__menu menu">
      <div
        onClick={onClickMenuBurger}
        className={openMenu ? "menu__burger active" : "menu__burger"}
      >
        <span></span>
      </div>
      <div className={openMenu ? "menu__body active" : "menu__body"}>
        <ul className="menu__items" onClick={onClickMenuBurger}>
          <li>
            <NavLink to="/" className="menu__item">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop" className="menu__item">
              Магазин
            </NavLink>
          </li>
          <li>
            <NavLink to="/Basket" className="menu__item">
              Корзина
              <div className="menu__itemsCount">{totalAmount}</div>
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="menu__social-media">
        <li>
          <a
            href="https://t.me/overtonehandpan"
            className="menu__social-media-icon"
            target="_blank"
          >
            <img src={telegramIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://vk.com/overtonehp"
            className="menu__social-media-icon"
            target="_blank"
          >
            <img src={vkIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
