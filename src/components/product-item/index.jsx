import React from "react";
import "./_index.scss";
import ImageSlider from "../image-slider";
import minusImg from "@images/svg/minus.svg";
import plusImg from "@images/svg/plus.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/basket/basketSlice";
import ChangeAmountButtons from "../changeAmountButton";

const ProductItem = ({ productData }) => {
  const { id, name, images, price } = {
    ...productData,
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
    <div className="product-item">
      <div className="product-item__image">
        <ImageSlider slides={images} sliderData={images} />
      </div>
      <Link to={`/Shop/${id}`} className="product-item__title">
        {name}
      </Link>
      <div className="product-item__footer">
        <div className="product-item__price">
          <span>{price}</span> руб.
        </div>
        <ChangeAmountButtons
          onClickPlus={onClickAddButton}
          onClickMinus={onClickRemoveButton}
          amount={addedCount}
        />
      </div>
    </div>
  );
};

export default ProductItem;
