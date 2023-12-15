import React from "react";
import "./_index.scss";
import Popup from "../../popup";
import audioSvg from "@images/svg/audio.svg";
import confirmImage from "@images/svg/confirm.png";
import { playNoteAudio } from "../../../utils/playAudio";

export default function SelectNotesPopup(props) {
  const {
    showPopup,
    setShowPopup,
    notesList,
    selected,
    onSelectNewNote,
    SelectNotesPopupRef,
  } = {
    ...props,
  };

  const [selectedNote, setSelectedNote] = React.useState(null);

  React.useEffect(() => {
    const onClickPlayNote = (event) => {
      const target = event.target;
      if (
        SelectNotesPopupRef.current &&
        SelectNotesPopupRef.current.contains(target)
      ) {
        const tone = target.closest("button").id;
        setSelectedNote(tone);
        playNoteAudio(tone);
      }
    };

    window.addEventListener("click", (event) => onClickPlayNote(event));

    return () => {
      window.removeEventListener("click", (event) => onClickPlayNote(event));
    };
  }, []);

  const onClickConfirm = () => {
    if (!selectedNote) return;
    setShowPopup(false);
    onSelectNewNote(selectedNote);
  };

  const noteListItems = (
    <ul className="create-scale__note-list">
      {notesList.map((note, index) => (
        <li key={index}>
          <button
            id={note}
            onClick={() => setSelectedNote(note)}
            className={
              selectedNote === note
                ? "create-scale__note-item create-scale__note-item_selected"
                : "create-scale__note-item"
            }
          >
            <div className="create-scale__note-tone">{note}</div>
            <div className="create-scale__note-image">
              <img src={audioSvg} alt="" />
            </div>
          </button>
        </li>
      ))}
    </ul>
  );

  const SelectNotesPopupContent = (
    <div className="create-scale">
      <div className="create-scale__top">
        <img
          className={
            selectedNote
              ? "create-scale__confirm-img"
              : "create-scale__confirm-img create-scale__confirm-img_not-active"
          }
          onClick={() => onClickConfirm()}
          src={confirmImage}
          alt=""
        />
      </div>
      <div ref={SelectNotesPopupRef} className="create-scale__body">
        {noteListItems}
      </div>
    </div>
  );

  return (
    <Popup
      popupContent={SelectNotesPopupContent}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
    />
  );
}
