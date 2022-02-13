import React from "react";

const Winners = (props) => {
  return (
    <div className="winner">
      <div className="item">
        <img src={props.img} alt="" />
        <div className="item__content">
          <div className="winning__price">
            <span>
              INR <b>{props.price}</b>
            </span>
          </div>
          <div className="winner__name">
            <span>{props.name}</span>
          </div>
          <div className="winning__game">
            <span>{props.game}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
