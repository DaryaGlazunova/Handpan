import React from "react";
import "./_index.scss";
import closeImage from "@images/svg/close.svg";

export default function Popup(props) {
  const { popupContent, showPopup, setShowPopup } = { ...props };

  const popupRef = React.useRef();

  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setShowPopup(false);
    }
  };

  return (
    <div ref={popupRef} className={showPopup ? "popup" : "hidden-popup"}>
      <div onClick={closePopup} className="popup__background">
        <div className="popup__wrapper">
          <div
            onClick={() => setShowPopup((prev) => !prev)}
            className="popup__close"
          >
            <img src={closeImage} alt="" />
          </div>
          <div className="popup__body">{popupContent}</div>
        </div>
      </div>
    </div>
  );
}
