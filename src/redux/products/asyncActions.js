import axios from "axios";
const serverPath = "http://localhost:3000/products";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const apiPath = serverPath;
  let { data } = await axios.get(apiPath);

  return JSON.parse(JSON.stringify(data));
});

export default fetchProducts;
