import React from "react";
import "./styles.scss";
import { ReactComponent as PlayIcon } from "../../assets/buttons/playicon.svg";
import { Link } from "react-router-dom";
const CardMobile = (props) => {
  return (
    <Link to={`/Spotifly/playlist/${props.id}`}>
      <div className="cardMobile">
        <div className="cardImage">
          <img src={props.thumbnail} alt="album" />
        </div>
        <div className="cardContent">
          <span>{props.name}</span>
          <p>{props.description}</p>
        </div>
        <span className="playIcon">
          <PlayIcon />
        </span>
      </div>
    </Link>
  );
};

export default CardMobile;
