import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmptyBasket } from "../../components/empty-basket";

import BasketItem from "../../components/basket-item";
import basketSvg from "@images/svg/basket.svg";
import trashSvg from "@images/svg/trash.svg";
import { clearItems } from "../../redux/basket/basketSlice";

import "./_index.scss";

export const BasketPage = () => {
  const itemsInBasket = useSelector((state) => state.basket.itemsInBasket);
  const totalPrice = useSelector((state) => state.basket.totalPrice);

  const dispatch = useDispatch();

  const onClickClearBasket = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  const onClickMakeOrder = () => {
    if (window.confirm("Сделать заказ?")) {
    }
  };

  return (
    <div className="basket">
      {!itemsInBasket.length ? (
        <EmptyBasket />
      ) : (
        <div className="basket__container container">
          <div className="basket__top">
            <div className="basket__title">
              <img src={basketSvg} alt="" />
              <h2>Корзина</h2>
            </div>
            <div className="basket__empty-cart" onClick={onClickClearBasket}>
              <img src={trashSvg} alt="" />
              <p>Очистить корзину</p>
            </div>
          </div>
          <div className="basket__body">
            <div className="items-in-cart">
              <ul>
                {itemsInBasket
                  .filter((item) => item.count > 0)
                  .map((item) => (
                    <BasketItem key={item.id} itemData={item} />
                  ))}
              </ul>
            </div>
          </div>
          <div className="basket__bottom">
            <div className="basket__total-amount">
              Итого товаров на сумму: <span>{totalPrice}</span> руб.
            </div>
            <div className="basket__make-order-btn" onClick={onClickMakeOrder}>
              Заказать
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
