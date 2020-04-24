import React from 'react'
import './styles.scss'
import Card from '../Card'

const Main = () => {
    return(
        <div className="main">
            <div className="upperNav">textaaaaaaaaaaaaaaa</div>
            <div className="mainContent">
                <h1>Uniquely yours</h1>
                <div className="cardsWrap">
                    <Card/>
                </div>
            </div>
        </div>
    );    
}

export default Main;