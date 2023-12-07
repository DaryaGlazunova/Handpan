import React from "react";
import "./_index.scss";

export default function Scale(props) {
  const { notesList, selectedNote } = { ...props };

  const notesButtonsList = notesList.map((note) => {
    return (
      <button
        id={note.tone}
        className={
          selectedNote == note.tone
            ? "notes__note tone scale-note-selected"
            : "notes__note tone no-select"
        }
      >
        <div class="notes__tone-name no-select">{note.tone}</div>
        <div class="notes__order no-select">{note.order}</div>
      </button>
    );
  });

  return (
    <div className="playground__scale scale">
      <div className="scale__name">ScaleName</div>
      <div className="scale__notes notes">{notesButtonsList}</div>
    </div>
  );
}
