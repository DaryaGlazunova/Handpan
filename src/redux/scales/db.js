import handpanImageFront from "@images/main-page/playground/kurd9/front.png";
import handpanImageBack from "@images/main-page/playground/kurd9/back.png";

export const samples = [
  {
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

      image: handpanImageFront,
    },
    backSide: {
      notes: [],
      image: handpanImageBack,
    },
  },

  {
    id: 2,
    name: "kurd11",
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

      image: handpanImageFront,
    },
    backSide: {
      notes: [
        { tone: "G#4", order: 9 },
        { tone: "C#4", order: 10 },
      ],

      image: handpanImageBack,
    },
  },
];
