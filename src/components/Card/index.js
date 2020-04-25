import React from 'react'
import './styles.scss'
import {ReactComponent as PlayIcon} from '../../assets/buttons/playbtn.svg';
const Card = (props) => {
    return(
        <div className="card">
            <div className="cardImage">
                <img
                    src={props.thumbnail}
                    alt="album image"
                />
            </div>
        <div className="cardContent">
            <span>{props.name}</span>
            <p>{props.description}</p>
        </div>
        <span className="playIcon">
            <PlayIcon/>
        </span>
        </div>
    );    
}

export default Card;