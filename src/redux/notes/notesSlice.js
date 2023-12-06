import { createSlice } from "@reduxjs/toolkit";

const notes = [
  {
    name: "name1",
    notes: [
      { tone: F0, order: 0 },
      { tone: F1, order: 1 },
      { tone: F2, order: 2 },
      { tone: F3, order: 3 },
      { tone: F4, order: 4 },
      { tone: F5, order: 5 },
      { tone: F6, order: 6 },
      { tone: F7, order: 7 },
      { tone: F8, order: 8 },
    ],
  },
  {
    name: "name2",
    notes: [
      { tone: A0, order: 0 },
      { tone: A1, order: 1 },
      { tone: A2, order: 2 },
      { tone: A3, order: 3 },
      { tone: A4, order: 4 },
      { tone: A5, order: 5 },
      { tone: A6, order: 6 },
      { tone: A7, order: 7 },
      { tone: A8, order: 8 },
    ],
  },
];

const initialState = {
  items: [],
  status: Status.LOADING,
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = NotesSlice.actions;

export default NotesSlice.reducer;
