import React from 'react'
import './styles.scss'
import Card from '../Card'
import UpperNav from '../UpperNav'
const Main = () => {
    return(
        <div className="main">
            <UpperNav/>
            <div className="mainContent">
                <section>
                <div className="headerSection">
                        <div className="action-buttons">    
                            <button><h1>Uniquely yours</h1></button>
                            <div className="subText"></div>
                        </div>
                    </div>
                    <div className="cardsWrap">
                        <Card/>
                    </div>
                </section>
                <section>
                <div className="headerSection">
                        <div className="action-buttons">    
                            <button><h1>Charts</h1></button>
                            <button><span>SEE ALL</span></button>
                        </div>
                        <div className="subText"></div>                   
                    </div>        
                    <div className="cardsWrap">
                        <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                    </div>
                </section>
                <section>
                    <div className="headerSection">
                        <div className="action-buttons">    
                            <button><h1>Sleep</h1></button>
                            <button><span>SEE ALL</span></button>
                        </div>
                        <div className="subText"></div>                   
                    </div>
                    <div className="cardsWrap">
                        <Card/><Card/><Card/><Card/>
                    </div>
                </section>
                <section>
                    <div className="headerSection">
                        <div className="action-buttons">    
                            <button><h1>Focus</h1></button>
                            <button><span>SEE ALL</span></button>
                        </div>
                        <div className="subText">Music to help you concentrate.</div>                   
                    </div>
                    <div className="cardsWrap">
                        <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                    </div>
                </section>
            </div>
        </div>
    );    
}

export default Main;
