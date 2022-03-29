import React from "react";
import style from "./newitem.module.css";

export default function Newsitems({ title, desp, imgurl, source, url }) {
  function handleClick(e) {
    e.preventDefault();

    window.open(url);
  }

  return (
    <>
      <div className={style.card}>
        <img className={style.banner} src={imgurl} alt="imgurl" />
        <div>
          <h3 className={style.heading}>Headline</h3>
          <h2 className={style.title}>{title}</h2>
          <h3 className={style.heading}>Content</h3>
          <p className={style.desp}>{desp}</p>
        </div>
        <button className={style.btn} onClick={handleClick}>
          Go to News
        </button>
        <span className={style.source}>source:{" " + source}</span>
      </div>
    </>
  );
}
