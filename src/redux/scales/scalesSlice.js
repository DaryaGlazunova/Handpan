import { createSlice } from "@reduxjs/toolkit";
import { fetchScales } from "./asyncActions";

export const handpanTypes = {
  kurd9: "kurd9",
  kurd11: "kurd11",
};

export const Status = {
  loading: "loading",
  success: "completed",
  error: "error",
};

const initialState = {
  scales: [],
  selectedScale: null,
  status: Status.loading,
  // scales: [
  //   {
  //     id: 1,
  //     name: "D-Celtic-minor",
  //     type: "kurd9",
  //     fronSide: {
  //       notes: [
  //         { tone: "D3", order: 0 },
  //         { tone: "A3", order: 1 },
  //         { tone: "C4", order: 2 },
  //         { tone: "D4", order: 3 },
  //         { tone: "E4", order: 4 },
  //         { tone: "F4", order: 5 },
  //         { tone: "G4", order: 6 },
  //         { tone: "A4", order: 7 },
  //         { tone: "C5", order: 8 },
  //       ],
  //       image: "handpanImageFront",
  //     },
  //     backSide: {
  //       notes: [],
  //       image: "handpanImageBack",
  //     },
  //   },
  //   {
  //     id: 2,
  //     type: "kurd9",
  //     name: "D-Celtic-minor-2",
  //     fronSide: {
  //       notes: [
  //         { tone: "D3", order: 0 },
  //         { tone: "A3", order: 1 },
  //         { tone: "C4", order: 2 },
  //         { tone: "D4", order: 3 },
  //         { tone: "E4", order: 4 },
  //         { tone: "F4", order: 5 },
  //         { tone: "G4", order: 6 },
  //         { tone: "A4", order: 7 },
  //         { tone: "C5", order: 8 },
  //       ],
  //       image: "handpanImageFront",
  //     },
  //     backSide: {
  //       notes: [
  //         { tone: "F3", order: 9 },
  //         { tone: "A3", order: 10 },
  //       ],
  //       image: "handpanImageBack",
  //     },
  //   },
  //   {
  //     id: 3,
  //     type: "kurd9",
  //     name: "D-Celtic-minor-4",
  //     fronSide: {
  //       notes: [
  //         { tone: "F3", order: 0 },
  //         { tone: "G3", order: 1 },
  //         { tone: "G#3", order: 2 },
  //         { tone: "C4", order: 3 },
  //         { tone: "D#4", order: 4 },
  //         { tone: "F4", order: 5 },
  //         { tone: "G4", order: 6 },
  //         { tone: "G#4", order: 7 },
  //         { tone: "C5", order: 8 },
  //       ],
  //       image: "handpanImageFront",
  //     },
  //     backSide: {
  //       notes: [
  //         { tone: "C#3", order: 9 },
  //         { tone: "D#3", order: 10 },
  //         { tone: "D#5", order: 11 },
  //         { tone: "F5", order: 12 },
  //       ],
  //       image: "handpanImageBack",
  //     },
  //   },
  // ],
  // selectedScale: {
  //   id: 1,
  //   name: "D-Celtic-minor",
  //   type: "kurd9",
  //   fronSide: {
  //     notes: [
  //       { tone: "D3", order: 0 },
  //       { tone: "A3", order: 1 },
  //       { tone: "C4", order: 2 },
  //       { tone: "D4", order: 3 },
  //       { tone: "E4", order: 4 },
  //       { tone: "F4", order: 5 },
  //       { tone: "G4", order: 6 },
  //       { tone: "A4", order: 7 },
  //       { tone: "C5", order: 8 },
  //     ],
  //     image: "handpanImageFront",
  //   },
  //   backSide: {
  //     notes: [],
  //     image: "handpanImageBack",
  //   },
  // },
  // status: Status.success,
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
    "E4",
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

export const ScalesSlice = createSlice({
  name: "scales",
  initialState,
  reducers: {
    setScales(state, action) {
      state.scales = action.payload;
    },
    setSelectedScale(state, action) {
      state.scales = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchScales.pending, (state) => {
      state.scales = [];
      state.selectedScale = null;
      state.status = Status.loading;
    });
    builder.addCase(fetchScales.fulfilled, (state, action) => {
      state.scales = action.payload;
      state.status = Status.success;
      state.selectedScale = action.payload[0];
    });

    builder.addCase(fetchScales.rejected, (state) => {
      state.scales = [];
      state.selectedScale = null;
      state.status = Status.error;
    });
  },
});

export const { setScales, setSelectedScale } = ScalesSlice.actions;

export default ScalesSlice.reducer;
