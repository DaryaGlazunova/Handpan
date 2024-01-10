import React from "react";

import { Link } from "react-router-dom";

import "./_index.scss";

export const EmptyBasket = () => {
  return (
    <div className="empty-cart">
      <h1>Корзина пуста</h1>
      <Link className="back-to-shop" to="/Shop">
        Вернуться к выбору товаров
      </Link>
    </div>
  );
};
