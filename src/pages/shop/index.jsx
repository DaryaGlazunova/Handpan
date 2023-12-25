import React from "react";

import ProductItem from "../../components/product-item";
import ProductItemSkeleton from "../../components/product-item/skeleton";
import Popup from "../../components/popup";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../../redux/products/asyncActions";
import { Status } from "../../redux/products/productSlice";
import "./_index.scss";

const Shop = () => {
  const { items, status } = useSelector((state) => state.products);
  const [popupData, setPopupData] = React.useState();
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = React.useState(false);

  const openPopup = (event) => {
    const target = event.target;
    const pruductId = target.id;
    setPopupData(items.find((item) => item.id == pruductId));
    setShowPopup((prev) => !prev);
  };

  const getProducts = async () => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const products = items.map((productData) => (
    <ProductItem
      key={productData.id}
      productData={productData}
      openPopup={openPopup}
    />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <ProductItemSkeleton key={index} />
  ));

  return (
    <div className="content__container container">
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        cartItemData={popupData}
      />
      <div className="content__top"></div>
      {status === Status.ERROR ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <br />
          <br />
          <p>
            Товары не найдены. <br />
          </p>
        </div>
      ) : (
        <div className="content__body">
          {status === "loading" ? skeletons : products}
        </div>
      )}

      {/* <div className="content__pagination">
        <Pagination
          perPage={perPage}
          totalProducts={items.length}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      </div> */}
    </div>
  );
};

export default Shop;
