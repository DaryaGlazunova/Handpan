import React, { useCallback } from "react";
import Scale from "./scale";
import ChangeSound from "./change-sound";
import { useSelector, useDispatch } from "react-redux";
import HandPan from "./handpan";
import "./_index.scss";
import {
  tonalityTransportUp,
  tonalityTransportDown,
} from "../../utils/tonalityTransport";
import { playNoteAudio } from "../../utils/playAudio";

export default function VirtualPlayground(props) {
  const { sample, selectedHandpan, noteOrder } = useSelector(
    (state) => state.notes
  );
  const sampleDefaultValue = React.useRef(
    sample.fronSide.notes.concat(sample.backSide.notes)
  );

  const [selectedNote, setSelectedNote] = React.useState(null);
  const [noteList, setNoteList] = React.useState(sampleDefaultValue.current);

  const onClickTonality = (actionType) => {
    let newNoteList;
    switch (actionType) {
      case "up":
        newNoteList = tonalityTransportUp(noteList, noteOrder);
        break;

      case "down":
        newNoteList = tonalityTransportDown(noteList, noteOrder);
        break;
      case "reset":
        newNoteList = sampleDefaultValue.current;
        break;
    }

    if (newNoteList) {
      setNoteList(newNoteList);
    }
  };

  // const startNoteSound = (tone){}

  const onClickNote = React.useCallback(
    (event) => {
      const target = event.target.closest("button");
      if (target) {
        if (target.id) {
          const tone = target.id;
          setSelectedNote(tone);
          setTimeout(() => setSelectedNote(null), 600);
          playNoteAudio(tone);
        }
      }
    },
    [selectedNote]
  );

  React.useEffect(() => {
    window.addEventListener("click", (event) => onClickNote(event));
    return () =>
      window.removeEventListener("click", (event) => onClickNote(event));
  }, []);

  return (
    <div className="playground">
      <div className="playground__container">
        <div className="playground__top">
          <Scale selectedNote={selectedNote} notesList={noteList} />
        </div>
        <div className="playground__main">
          <div className="playground__top-actions">
            <ChangeSound onClickTonality={onClickTonality} />
          </div>
          <HandPan
            notesList={noteList}
            selectedHandpan={selectedHandpan}
            selectedNote={selectedNote}
          />
        </div>
      </div>
    </div>
  );
}
