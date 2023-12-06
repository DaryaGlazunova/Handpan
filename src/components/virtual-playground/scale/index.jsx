import React from "react";
import "./_index.scss";

export default function Scale() {
  return (
    <div className="playground__scale scale">
      <div className="scale__name">ScaleName</div>
      <div className="scale__notes notes">
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">D3</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">D4</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">E4</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">F4</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">A4</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">C5</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">D5</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">E5</div>
          <div class="notes__order no-select">0</div>
        </button>
        <button className="notes__note tone no-select">
          <div class="notes__tone-name no-select">F5</div>
          <div class="notes__order no-select">0</div>
        </button>
      </div>
    </div>
  );
}
