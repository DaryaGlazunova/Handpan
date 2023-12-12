import React from "react";
import "./_index.scss";

export default function Button(props) {
  const { onClickButton, btnTitle } = { ...props };

  return (
    <div onClick={() => onClickButton()} className="actions-btn">
      {btnTitle}
    </div>
  );
}
