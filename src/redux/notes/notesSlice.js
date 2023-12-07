import { createSlice } from "@reduxjs/toolkit";
import handpanImage from "@images/main-page/playground/handpan.png";

export const handpanTypes = {
  kurd9: "kurd9",
};

const sample = {
  id: 1,
  name: "kurd9",
  fronSide: {
    notes: [
      { tone: "D3", order: 0 },
      { tone: "A3", order: 1 },
      { tone: "A#3", order: 2 },
      { tone: "C4", order: 3 },
      { tone: "D4", order: 4 },
      { tone: "E4", order: 5 },
      { tone: "F4", order: 6 },
      { tone: "G4", order: 7 },
      { tone: "A4", order: 8 },
    ],

    image: handpanImage,
  },
  backSide: {
    notes: [],
    image: handpanImage,
  },
};

const initialState = {
  sample: sample,
  selectedHandpan: handpanTypes.kurd9,
  noteOrder: [
    "C2",
    "C#2",
    "D2",
    "D#2",
    "Е2",
    "F2",
    "F#2",
    "G2",
    "G#2",
    "A2",
    "A#2",
    "B2",
    "C3",
    "C#3",
    "D3",
    "D#3",
    "Е3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "Е4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
    "A#5",
    "B5",
    "C5",
    "C#6",
    "D6",
    "D#6",
    "Е6",
    "F6",
    "F#6",
    "G6",
    "G#6",
    "A6",
    "A#6",
    "B6",
  ],
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setSample(state, action) {
      state.sample = action.payload;
    },
    setSelectedHandpan(state, action) {
      state.selectedHandpan = action.payload;
    },
  },
});

export const { setItems } = NotesSlice.actions;

export default NotesSlice.reducer;
