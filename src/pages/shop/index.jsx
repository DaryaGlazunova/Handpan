import React from "react";

import ProductItem from "../../components/product-item";
import ProductItemSkeleton from "../../components/product-item/skeleton";

import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../../redux/products/asyncActions";
import { Status } from "../../redux/products/productSlice";
import "./_index.scss";

const Shop = () => {
  const { items, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onClickProductItem = (event) => {};

  const getProducts = async () => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const products = items.map((productData) => (
    <ProductItem key={productData.id} productData={productData} />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <ProductItemSkeleton key={index} />
  ));

  return (
    <div className="content__container container">
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
