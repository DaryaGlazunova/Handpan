import React from "react";
import handpanImage from "@images/main-page/playground/handpan.png";
import "./_index.scss";

export default function HandPan(props) {
  const { selectedNote, notesList, selectedHandpan } = { ...props };

  const notesButtonsList = notesList.map((note) => {
    return (
      <button
        id={note.tone}
        className={
          selectedNote == note.tone
            ? `handpan__note handpan__note-${note.order} handpan-note-play`
            : `handpan__note handpan__note-${note.order}`
        }
      >
        <div className="handpan__inner-note"></div>
        <div className="handpan__labels">
          <div className="handpan__note-label handpan__note-index no-select">
            {note.order}
          </div>
          <div className="handpan__note-label handpan__note-tone no-select">
            {note.tone}
          </div>
        </div>
      </button>
    );
  });

  return (
    <div className={`playground__handpan handpan ${selectedHandpan}`}>
      <div className="handpan__container">
        <div className="handpan__circle">
          <img src={handpanImage} className="handpan__image" alt="" />
          {notesButtonsList}
        </div>
      </div>
    </div>
  );
}
