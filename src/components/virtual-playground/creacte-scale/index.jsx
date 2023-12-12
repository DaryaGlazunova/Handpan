import React from "react";
import "./_index.scss";
import Button from "../../button";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

export default function CreateScales(props) {
  const { scalesList, onClickCreateNewScale } = { ...props };
  const [openWindow, setOpenWindow] = React.useState(false);
  const windowRef = React.useRef(null);

  const onClickOpenWindow = () => {
    setOpenWindow((prev) => !prev);
  };

  const onClickListItem = (event) => {
    setOpenWindow(false);
    onClickCreateNewScale(event);
  };

  const listItems = scalesList.map((item) => {
    const frontNotesCount = item.fronSide.notes.length;
    const backNotesCount = item.backSide.notes.length;
    return (
      <li
        onClick={(event) => onClickListItem(event)}
        id={item.id}
        key={item.id}
        className="create-scale__item"
      >
        <div className="create-scale__item-info">
          <div className="create-scale__item-name">{item.name}</div>
          <div className="create-scale__item-notes">
            Количество нот спереди: {frontNotesCount} <br />
            Количество нот сзади: {backNotesCount}
          </div>
        </div>
      </li>
    );
  });

  useOutsideClick(() => {
    setOpenWindow(false);
  }, windowRef);

  return (
    <div ref={windowRef} className="create-scale">
      <div className="create-scale__btn">
        <Button
          onClickButton={() => onClickOpenWindow()}
          btnTitle="Создать строй"
        />
      </div>

      {openWindow && (
        <div className="create-scale__window">
          <div className="create-scale__title">Выберите тип строя</div>
          <ul className="create-scale__list">{listItems}</ul>
        </div>
      )}
    </div>
  );
}
