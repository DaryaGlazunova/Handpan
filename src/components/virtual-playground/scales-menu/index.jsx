import React from "react";
import "./_index.scss";
import Button from "../button";
import shopSvg from "@images/svg/shop.svg";
import audioSvg from "@images/svg/audio.svg";
import videoSvg from "@images/svg/video.svg";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

export default function ScalesMenu(props) {
  const { scalesList, onSelectScale } = { ...props };
  const [openList, setOpenList] = React.useState(false);
  const menuRef = React.useRef(null);

  const onClickOpenList = () => {
    setOpenList((prev) => !prev);
  };

  const onClickListItem = (event) => {
    setOpenList(false);
    event.preventDefault();
    onSelectScale(event);
  };

  useOutsideClick(() => {
    setOpenList(false);
  }, menuRef);

  const listItems = scalesList.map((item) => {
    const frontNotes = item.fronSide.notes.map((obj) => obj.tone).join(",");
    const backNotes = item.backSide.notes.map((obj) => obj.tone).join(",");
    return (
      <li
        onClick={(event) => onClickListItem(event)}
        id={item.id}
        key={item.id}
        className="scales-dd__item"
      >
        <div className="scales-dd__item-info">
          <div className="scales-dd__item-name">{item.name}</div>
          <div className="scales-dd__item-notes">
            front: {frontNotes} <br />
            {backNotes.length === 0 ? "" : "back: " + backNotes}
          </div>
        </div>
        <div className="scales-dd__item-links">
          <a href="#">
            <img src={audioSvg} alt="" />
          </a>
          <a href="#">
            <img src={videoSvg} alt="" />
          </a>
          <a href="#">
            <img src={shopSvg} alt="" />
          </a>
        </div>
      </li>
    );
  });

  return (
    <div ref={menuRef} className={"scales-dd"}>
      <div className="scales-dd__btn">
        <Button
          onClickButton={() => onClickOpenList()}
          btnTitle="Выбрать строй"
        />
      </div>
      {openList && <ul className="scales-dd__list">{listItems}</ul>}
    </div>
  );
}
