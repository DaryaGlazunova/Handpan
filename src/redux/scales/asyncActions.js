import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchScales = createAsyncThunk("scales/fetchScales", async () => {
  const apiPath = `https://6576b569424e2adad5b476f4.mockapi.io/scales`;

  const { data } = await axios.get(apiPath);
  console.log("api data", data);
  return data;
});
