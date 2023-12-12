import React from "react";
import "./_index.scss";

export default function ScaleLine(props) {
  const { notesList, selectedNote, scaleName } = { ...props };

  const notesButtonsList = notesList.map((note, index) => {
    return (
      <button
        key={index}
        id={note.tone}
        className={
          selectedNote == note.tone
            ? "notes__note tone scale-note-selected"
            : "notes__note tone no-select"
        }
      >
        <div className="notes__tone-name no-select">{note.tone}</div>
        <div className="notes__order no-select">{note.order}</div>
      </button>
    );
  });

  return (
    <div className="playground__scale scale">
      <div className="scale__name">{scaleName}</div>
      <div className="scale__notes notes">{notesButtonsList}</div>
    </div>
  );
}
