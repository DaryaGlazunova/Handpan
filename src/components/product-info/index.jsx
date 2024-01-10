import React from "react";
import "./_index.scss";
import ImageSlider from "../image-slider";
import minusImg from "@images/svg/minus.svg";
import plusImg from "@images/svg/plus.svg";
import ChangeAmountButtons from "../changeAmountButton";
import { useSelector, useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/basket/basketSlice";

const ProductCart = ({ productInfo }) => {
  const { id, images, name, description, specifications, price } = {
    ...productInfo,
  };

  const selectProductsItem = (id) => (state) =>
    state.basket.itemsInBasket.find((item) => item.id === id);

  const productItem = useSelector(selectProductsItem(id));
  const addedCount = productItem ? productItem.count : 0;
  const dispatch = useDispatch();

  const onClickAddButton = () => {
    const item = {
      id,
      name,
      price,
      images,
      count: 1,
    };
    dispatch(addItem(item));
  };

  const onClickRemoveButton = () => {
    if (addedCount > 1) {
      dispatch(minusItem(id));
    }
    if (addedCount === 1) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="product-info">
      <div className="product-info__image">
        <ImageSlider slides={images} sliderData={images} />
      </div>
      <div className="product-info__title">{name}</div>
      <div className="product-info__description">{description}</div>
      <div className="product-info__specifications">
        <div>Характеристики: </div>
        <br />
        <ul>
          <li>
            <span>Вес:</span>
            {specifications.Weight}
          </li>
          <li>
            <span>Диаметр:</span>
            {specifications.Diameter}
          </li>
          <li>
            <span>Высота:</span>
            {specifications.Height}
          </li>
          <li>
            <span>Цвет:</span>
            {specifications.Color}
          </li>
          <li>
            <span>Сталь:</span>
            {specifications.Steel}
          </li>
        </ul>
      </div>
      <div className="product-info__footer">
        <div className="product-info__price">
          Цена: <span>{price}</span> руб.
        </div>
        <div className="product-info__amount-block">
          <span>Добавить в корзину</span>
          <ChangeAmountButtons
            onClickPlus={onClickAddButton}
            onClickMinus={onClickRemoveButton}
            amount={addedCount}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
