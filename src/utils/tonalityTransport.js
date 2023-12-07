export const tonalityTransportUp = (notesList, notesOrder) => {
  return notesList.map((note) => {
    const nodeIndex = notesOrder.indexOf(note.tone);
    if (nodeIndex === notesOrder.length || nodeIndex === -1) {
      return { tone: note.tone, order: note.order };
    } else {
      return { tone: notesOrder[nodeIndex + 1], order: note.order };
    }
  });
};

export const tonalityTransportDown = (notesList, notesOrder) => {
  return notesList.map((note) => {
    const nodeIndex = notesOrder.indexOf(note.tone);
    if (nodeIndex === 0 || nodeIndex === -1) {
      return { tone: note.tone, order: note.order };
    } else {
      return { tone: notesOrder[nodeIndex - 1], order: note.order };
    }
  });
};
