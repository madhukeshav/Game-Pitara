import React from "react";

const TabProp = (props) => {
  const handleGames = (e) =>{
    console.log("hello");
  }
  return (
    <div>
      <div className="images">
        <img src={props.games} alt="" onClick={handleGames} />
        <img src={props.games} alt="" />
        <img src={props.games} alt="" />
        <img src={props.games} alt="" />
        <img src={props.games} alt="" />
      </div>
    </div>
  );
};

export default TabProp;
