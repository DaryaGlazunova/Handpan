import React, { useCallback } from "react";
import ScaleLine from "./scale-line";
import ScalesMenu from "./scales-menu";
import { fetchScales } from "../../redux/scales/asyncActions";
import CreateScales from "./creacte-scale";
import ChangeSound from "./change-sound";
import { Status, setSelectedScale } from "../../redux/scales/scalesSlice";

import { useSelector, useDispatch } from "react-redux";
import HandPan from "./handpan";
import "./_index.scss";
import {
  tonalityTransportUp,
  tonalityTransportDown,
} from "../../utils/tonalityTransport";
import { playNoteAudio } from "../../utils/playAudio";

import imageFront from "@images/main-page/playground/kurd9/front.png";
import imageBack from "@images/main-page/playground/kurd9/back.png";
import Button from "../button";
import SelectNotesPopup from "./select-notes-popup";

export default function VirtualPlayground(props) {
  const dispatch = useDispatch();
  const { scales, status, selectedScale, noteOrder } = useSelector(
    (state) => state.scales
  );

  React.useEffect(() => {
    const getScales = async () => {
      dispatch(fetchScales());
    };
    getScales();
  }, []);

  const sampleDefaultValue = React.useRef([]);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const SelectNotesPopupRef = React.useRef(null);
  const [turnHandpan, setTurnHandpan] = React.useState(false);
  const [noteList, setNoteList] = React.useState([]);
  const [frontNotesList, setFrontNotesList] = React.useState([]);
  const [backNotesList, setBackNotesList] = React.useState([]);
  const [showSelectNotesPopup, setShowSelectNotesPopup] = React.useState(false);
  let frontNotesCount = React.useRef(0);

  React.useEffect(() => {
    if (status === Status.success) {
      sampleDefaultValue.current = [
        ...selectedScale.fronSide.notes,
        ...selectedScale.backSide.notes,
      ];
      setNoteList(sampleDefaultValue.current);
    }
  }, [selectedScale]);

  React.useEffect(() => {
    if (status === Status.success) {
      frontNotesCount.current = selectedScale.fronSide.notes.length;

      setFrontNotesList(noteList.slice(0, frontNotesCount.current));
      setBackNotesList(
        noteList.slice(frontNotesCount.current, noteList.length)
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

  const onSelectScale = (event) => {
    const scaleId = event.currentTarget.id;
    const newSelectedScale = scales.find((scale) => scale.id == scaleId);
    if (newSelectedScale) {
      dispatch(setSelectedScale(newSelectedScale));
    }
  };

  const onClickCreateNewScale = (event) => {
    const scaleId = event.currentTarget.id;
    let newSelectedScale = scales.find((scale) => scale.id == scaleId);

    if (newSelectedScale) {
      newSelectedScale = JSON.parse(JSON.stringify(newSelectedScale));
      for (let scaleParam of Object.getOwnPropertyNames(newSelectedScale)) {
        if (scaleParam.includes("Side")) {
          const notesList = newSelectedScale[scaleParam].notes;
          for (let i = 0; i < notesList.length; i++) {
            newSelectedScale[scaleParam].notes[i]["tone"] = "♪";
          }
        }
      }
      dispatch(setSelectedScale(newSelectedScale));
    }
  };

  const onSelectNewNote = (note) => {
    let newObject = JSON.parse(JSON.stringify(noteList));
    newObject = newObject.map((item) => {
      if (item.order == selectedNote) {
        item.tone = note;
      }
      return item;
    });
    console.log("newObject", newObject);
    setNoteList(newObject);
  };

  React.useEffect(() => {
    const onClickPlayNote = (event) => {
      const target = event.target.closest("button");
      if (
        SelectNotesPopupRef.current &&
        SelectNotesPopupRef.current.contains(target)
      ) {
        return;
      }

      if (target) {
        if (target.id) {
          const tone = target.id;

          if (tone.length == 1) {
            setSelectedNote(target.dataset.number);
            setShowSelectNotesPopup(true);
            return;
          } else {
            setSelectedNote(tone);
            setTimeout(() => setSelectedNote(null), 600);
            playNoteAudio(tone);
          }
        }
      }
    };

    window.addEventListener("click", (event) => onClickPlayNote(event));
    return () => {
      window.removeEventListener("click", (event) => onClickPlayNote(event));
    };
  }, []);

  return (
    <div className="playground">
      {status === Status.loading ? (
        <div>loading</div>
      ) : (
        <div className="playground__container">
          <SelectNotesPopup
            onSelectNewNote={onSelectNewNote}
            showPopup={showSelectNotesPopup}
            setShowPopup={setShowSelectNotesPopup}
            notesList={noteOrder}
            SelectNotesPopupRef={SelectNotesPopupRef}
          />
          <div className="playground__top">
            <ScaleLine
              scaleName={selectedScale.name}
              selectedNote={selectedNote}
              notesList={noteList}
            />
          </div>
          <div className="playground__body">
            <ChangeSound onClickTonality={onClickTonality} />
            <div className="playground__top-actions">
              <div className="playground__scales-menu">
                <ScalesMenu onSelectScale={onSelectScale} scalesList={scales} />
              </div>
              <div className="playground__create-scale">
                <CreateScales
                  onClickCreateNewScale={onClickCreateNewScale}
                  scalesList={scales}
                />
              </div>
              {backNotesList.length === 0 && (
                <Button
                  onClickButton={onClickTurnOver}
                  btnTitle="Перевернуть"
                />
              )}
            </div>
            <div className="playground__handpans">
              <HandPan
                notesList={turnHandpan ? [] : frontNotesList}
                selectedHandpan={selectedScale.type}
                selectedNote={selectedNote}
                imageUrlBack={imageBack}
                imageUrl={imageFront}
                turnHandpan={turnHandpan}
              />
              {backNotesList.length > 0 && (
                <HandPan
                  notesList={backNotesList}
                  selectedHandpan={selectedScale.type}
                  selectedNote={selectedNote}
                  imageUrl={imageBack}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
