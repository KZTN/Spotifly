import React from "react";
import "./styles.scss";
import { ReactComponent as PlayIcon } from "../../assets/buttons/playbtn.svg";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/playlist/${props.id}`}>
        <div className="cardImage">
          <img src={props.thumbnail} alt="album image" />
        </div>
        <div className="cardContent">
          <span>{props.name}</span>
          <p>{props.description}</p>
        </div>
        <span className="playIcon">
          <PlayIcon />
        </span>
      </Link>
    </div>
  );
};

export default Card;
