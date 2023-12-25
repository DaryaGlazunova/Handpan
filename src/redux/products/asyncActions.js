import axios from "axios";
const serverPath = "http://localhost:3000/products";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = CreatrA async () => {
//   // const url =
//   //   categoryName.toLowerCase() !== "all"
//   //     ? `${serverPath}/category/${categoryName}?sortBy=${sortBy}&order=${order}${search}`
//   //     : `${serverPath}?sortBy=${sortBy}&sort=${order}${search}`;
//   // console.log("url", url);
//   console.log("1");

//   const { data } = await axios.get(serverPath);
//   console.log("2");
//   return data;
// };

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const apiPath = serverPath;
  let { data } = await axios.get(apiPath);

  return JSON.parse(JSON.stringify(data));
});

// const fetchProducts = async () => {
//   const apiPath = serverPath;
//   let { data } = await axios.get(apiPath);

//   return data;
// };

export default fetchProducts;
