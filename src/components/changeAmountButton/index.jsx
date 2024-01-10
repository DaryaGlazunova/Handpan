import React from "react";
import "./_index.scss";
import minusImg from "@images/svg/minus.svg";
import plusImg from "@images/svg/plus.svg";

const ChangeAmountButtons = ({ onClickPlus, onClickMinus, amount }) => {
  return (
    <div className="amount-buttons">
      <button className="amount-buttons__remove" onClick={() => onClickMinus()}>
        <img src={minusImg} alt="" />
      </button>

      <span className="amount-buttons__amount">{amount}</span>
      <button className="amount-buttons__add" onClick={() => onClickPlus()}>
        <img src={plusImg} alt="" />
      </button>
    </div>
  );
};

export default ChangeAmountButtons;
