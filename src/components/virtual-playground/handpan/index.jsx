import React from "react";
import handpanImage from "@images/main-page/playground/handpan.png";
import "./_index.scss";

export default function HandPan(props) {
  const { selectedNote } = { ...props };

  return (
    <div className="playground__handpan handpan">
      <div className="handpan__container">
        <div className="handpan__circle">
          <img src={handpanImage} className="handpan__image" alt="" />
          <button className="handpan__note handpan__note-0">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                0
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                F2
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-1">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                1
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                F3
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-2">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                2
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                G3
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-3">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                3
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                G#3
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-4">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                4
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                C4
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-5">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                5
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                D#4
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-6">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                6
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                F4
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-7">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                7
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                F7
              </div>
            </div>
          </button>
          <button className="handpan__note handpan__note-8">
            <div className="handpan__inner-note"></div>
            <div className="handpan__labels">
              <div className="handpan__note-label handpan__note-index no-select">
                8
              </div>
              <div className="handpan__note-label handpan__note-tone no-select">
                F8
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
