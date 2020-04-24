import React from 'react'
import './styles.scss'
const Card = () => {
    return(
        <div className="card">
            <div className="cardImage">
                <img
                    src="https://images.unsplash.com/photo-1512608121467-72931bf816c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="album image"
                />
            </div>
        <div className="cardContent">
            <span>Liked Songs</span>
        </div>
</div>
    );    
}

export default Card;