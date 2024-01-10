import axios from "axios";
const serverPath = "http://localhost:3000/products";

const fetchProductInfo = async (productId) => {
  const apiPath = `${serverPath}/${productId}`;
  let { data } = await axios.get(apiPath);
  return JSON.parse(JSON.stringify(data));
};

export default fetchProductInfo;
