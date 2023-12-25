import React from "react";
import "./_index.scss";
import ImageSlider from "../image-slider";
import minusImg from "@images/svg/minus.svg";
import plusImg from "@images/svg/plus.svg";

const ProductCart = ({ productData }) => {
  const { name, images, price, description, specifications } = {
    ...productData,
  };

  return (
    <div className="product-item">
      <div className="product-item__image">
        <ImageSlider slides={images} sliderData={images} />
      </div>
      <div className="product-item__title">{name}</div>
      <div className="product-item__description">{description}</div>
      <div className="product-item__specifications">
        <span>Характеристики: </span>
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
      <div className="product-item__footer">
        <div className="product-item__price">
          <span>Цена: {price}</span> руб.
        </div>
        <div className="product-item__amount-block">
          <button
            className="product-item__remove-button"
            // onClick={onClickRemoveButton}
          >
            <img src={minusImg} alt="" />
          </button>

          <span className="product-item__amount">1</span>
          <button
            className="product-item__add-button"
            // onClick={onClickAddButton}
          >
            <img src={plusImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
