import React from "react";
import { addItem, minusItem, removeItem } from "../../redux/basket/basketSlice";
import ChangeAmountButtons from "../changeAmountButton";
import imageMinusSvg from "@images/svg/minus.svg";
import imagePlusSvg from "@images/svg/plus.svg";

import { useDispatch } from "react-redux";
import "./_index.scss";

const BasketItem = ({ itemData }) => {
  const dispatch = useDispatch();

  const onClickAddButton = () => {
    const item = {
      id: itemData.id,
      title: itemData.title,
      price: itemData.price,
      image: itemData.image,
      count: 1,
    };

    dispatch(addItem(item));
  };

  const onClickMinusButton = () => {
    if (itemData.count > 1) {
      dispatch(minusItem(itemData.id));
    } else {
      dispatch(removeItem(itemData.id));
    }
  };

  const onClickRemoveButton = () => {
    if (confirm("Удалить товар из корзины?")) {
      dispatch(removeItem(itemData.id));
    }
  };

  return (
    <li className="items-in-basket__item">
      <div className="items-in-basket__image">
        <img src={itemData.images[0]} alt="" />
      </div>
      <div className="items-in-basket__text">
        <h3>{itemData.name}</h3>
      </div>

      <ChangeAmountButtons
        onClickPlus={onClickAddButton}
        onClickMinus={onClickMinusButton}
        amount={itemData.count}
      />

      <div className="items-in-basket__price">
        <span>{itemData.price * itemData.count}</span> руб.
      </div>
      <div
        className="items-in-basket__remove-button"
        onClick={() => onClickRemoveButton()}
      >
        <button>X</button>
      </div>
    </li>
  );
};

export default BasketItem;
