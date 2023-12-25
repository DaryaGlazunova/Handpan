import React from "react";
import "./_index.scss";
import ImageSlider from "../image-slider";
import minusImg from "@images/svg/minus.svg";
import plusImg from "@images/svg/plus.svg";

const ProductItem = ({ productData, openPopup }) => {
  const { id, name, images, price, description, specifications } = {
    ...productData,
  };

  return (
    <div className="product-item">
      <div className="product-item__image">
        <ImageSlider slides={images} sliderData={images} />
      </div>
      <div
        id={id}
        className="product-item__title"
        onClick={(event) => openPopup(event)}
      >
        {name}
      </div>
      <div className="product-item__footer">
        <div className="product-item__price">
          <span>{price}</span> руб.
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

export default ProductItem;
