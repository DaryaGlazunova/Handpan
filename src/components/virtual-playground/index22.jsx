import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./_index.scss";

import { setScales, setSelectedScale } from "../../redux/scales/scalesSlice";
import { fetchScales } from "../../redux/scales/asyncActions";
import { Status } from "../../redux/scales/scalesSlice";

import Scale from "./scale";
import ChangeSound from "./change-sound";
import HandPan from "./handpan";

import {
  tonalityTransportUp,
  tonalityTransportDown,
} from "../../utils/tonalityTransport";
import { playNoteAudio } from "../../utils/playAudio";

export default function VirtualPlayground() {
  const dispatch = useDispatch();

  const { scales, status, selectedScale, noteOrder } = useSelector(
    (state) => state.notes
  );

  React.useEffect(() => {
    const getScales = async () => {
      dispatch(fetchScales());
    };
    getScales();
  }, []);

  const sampleDefaultValue = React.useRef([]);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [turnHandpan, setTurnHandpan] = React.useState(false);
  const [noteList, setNoteList] = React.useState([]);
  let frontNotesCount = React.useRef(0);
  const [frontNotesList, setFrontNotesList] = React.useState([]);
  let backNotesList = React.useRef([]);

  React.useEffect(() => {
    if (status === Status.success) {
      sampleDefaultValue.current = selectedScale.fronSide.notes.concat(
        selectedScale.backSide.notes
      );
      setNoteList(sampleDefaultValue.current);
      // frontNotesCount.current = selectedScale.fronSide.notes.length;
      // // frontNotesList.current = noteList.slice(0, frontNotesCount.current);
      // setFrontNotesList(noteList.slice(0, frontNotesCount.current));
      // backNotesList.current = noteList.slice(
      //   frontNotesCount.current,
      //   noteList.length
      // );
    }
  }, [scales]);

  React.useEffect(() => {
    if (status === Status.success) {
      frontNotesCount.current = selectedScale.fronSide.notes.length;

      setFrontNotesList(noteList.slice(0, frontNotesCount.current));
      backNotesList.current = noteList.slice(
        frontNotesCount.current,
        noteList.length
      );
    }
  }, [noteList]);

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

  const onClickTurnOver = () => {
    setTurnHandpan((prev) => !prev);
  };

  React.useEffect(() => {
    const onClickNote = (event) => {
      const target = event.target.closest("button");
      if (target) {
        if (target.id) {
          const tone = target.id;
          setSelectedNote(tone);
          setTimeout(() => setSelectedNote(null), 600);
          playNoteAudio(tone);
        }
      }
    };

    window.addEventListener("click", (event) => onClickNote(event));

    return () => {
      window.removeEventListener("click", (event) => onClickNote(event));
    };
  }, []);

  //   const onChangeSamples = (event) => {
  //     const typeId = event.target.id;
  //     dispatch(setSample(typeId));
  //   };

  return (
    <div className="playground">
      {status === Status.loading ? (
        <div>loading</div>
      ) : (
        <div className="playground__container">
          <div className="playground__top">
            <Scale
              scaleName={selectedScale.name}
              selectedNote={selectedNote}
              notesList={noteList}
            />
          </div>
          <div className="playground__body">
            <ChangeSound onClickTonality={onClickTonality} />
            <div className="playground__top-actions">
              {/* <ul
                className="playground__saples-types"
                //   onClick={(event) => onChangeSamples(event)}
              >
                <li id="kurd9">kurd9</li>
                <li id="kurd11">kurd11</li>
              </ul> */}
              {backNotesList.current.length === 0 && (
                <div
                  onClick={() => onClickTurnOver()}
                  className="playground__turn-over-btn actions-btn"
                >
                  Перевернуть
                </div>
              )}
            </div>
            <div className="playground__handpans">
              <HandPan
                notesList={turnHandpan ? [] : frontNotesList}
                selectedHandpan={selectedScale.type}
                selectedNote={selectedNote}
                // imageUrlBack={imageBack}
                // imageUrl={imageFront}
                turnHandpan={turnHandpan}
              />
              {/* {backNotesList.length > 0 && (
                <HandPan
                  notesList={backNotesList.current}
                  selectedHandpan={selectedScale.type}
                  selectedNote={selectedNote}
                  imageUrl={imageBack}
                />
              )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
