import React from "react";
// import imageUrl from "@images/main-page/playground/kurd9/front.png";
// import imageUrlBack from "@images/main-page/playground/kurd9/back.png";

import "./_index.scss";

export default function HandPan(props) {
  const {
    selectedNote,
    notesList,
    selectedHandpan,
    imageUrl,
    imageUrlBack,
    turnHandpan,
  } = {
    ...props,
  };

  const notesButtonsList = notesList.map((note, index) => {
    return (
      <button
        key={index}
        id={note.tone}
        data-number={note.order}
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
        <div
          className={turnHandpan ? "handpan__body flipped" : "handpan__body"}
        >
          <div className="handpan__front">
            <img src={imageUrl} className="handpan__image" alt="" />
          </div>
          {imageUrlBack && (
            <div className="handpan__back">
              <img src={imageUrlBack} className="handpan__image" alt="" />
            </div>
          )}

          {notesButtonsList}
        </div>
      </div>
    </div>
  );
}
