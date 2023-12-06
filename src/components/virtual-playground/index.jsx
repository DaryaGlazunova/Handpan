import React from "react";
import Scale from "./scale";
import ChangeSound from "./change-sound";
import HandPan from "./handpan";
import "./_index.scss";

export default function VirtualPlayground() {
  const [selectedNote, setSelectedNote] = React.useState(null);

  React.useEffect(() => {
    const onClickNote = (event) => {
      console.log(event);
    };

    window.addEventListener("click", (event) => onClickNote(event));

    return () =>
      window.removeEventListener("click", (event) => onClickNote(event));
  }, []);

  return (
    <div className="playground">
      <div className="playground__container">
        <div className="playground__top">
          <Scale />
        </div>
        <div className="playground__main">
          <div className="playground__top-actions">
            <ChangeSound />
          </div>
          <HandPan />
        </div>
      </div>
    </div>
  );
}
