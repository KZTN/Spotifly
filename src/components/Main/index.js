import React from 'react'
import './styles.scss'
import Card from '../Card'
import UpperNav from '../UpperNav'
const Main = () => {
    return(
        <div className="main">
            <UpperNav/>
            
            <div className="mainContent">
                <h1>Uniquely yours</h1>
                <div className="cardsWrap">
                    <Card/>
                </div>
            </div>
            <div className="mainContent">
                <h2>Charts</h2>
                <div className="cardsWrap">
                    <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                </div>
            </div>
            <div className="mainContent">
                <h2>Charts</h2>
                <div className="cardsWrap">
                    <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                </div>
            </div>
            <div className="mainContent">
                <h2>Charts</h2>
                <div className="cardsWrap">
                    <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                </div>
            </div>
            <div className="mainContent">
                <h2>Charts</h2>
                <div className="cardsWrap">
                    <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                </div>
            </div>
            
        </div>
    );    
}

export default Main;
