import React from "react";
import style from "../button.module.css";

const MainButton = (props) => {
  return (
    <button className={style.button}>
      <span className="w-full">{props.children}</span>
      <i></i>
    </button>
  );
};

export default MainButton;