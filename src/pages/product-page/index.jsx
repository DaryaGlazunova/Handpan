import React from "react";
import { useParams } from "react-router-dom";
import fetchProductInfo from "../../api";
import ProductCart from "../../components/product-info";
import "./_index.scss";

const ProductPage = () => {
  const [productInfo, setProductInfo] = React.useState();
  const { id } = useParams();

  const getProduct = async () => {
    const data = await fetchProductInfo(id);
    setProductInfo(data);
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  if (!productInfo) {
    return <>Загрузка информации о товаре...</>;
  }

  return (
    <div className="container">
      <ProductCart productInfo={productInfo} />
    </div>
  );
};

export default ProductPage;
