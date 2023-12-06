import React from "react";
import plusImage from "@images/main-page/playground/change-sound/plus.svg";
import minusImage from "@images/main-page/playground/change-sound/minus.png";
import retryImage from "@images/main-page/playground/change-sound/retry.svg";
import "./_index.scss";

export default function ChangeSound(props) {
  const { selectedNote } = { ...props };
  return (
    <div className="playground__change-sound change-sound">
      <div className="change-sound__title">Измените звук</div>
      <div className="change-sound__buttons">
        <button className="change-sound__minus">
          <img src={minusImage} alt="" />
        </button>
        <button className="change-sound__reset">
          <img src={retryImage} alt="" />
        </button>
        <button className="change-sound__plus">
          <img src={plusImage} alt="" />
        </button>
      </div>
    </div>
  );
}
