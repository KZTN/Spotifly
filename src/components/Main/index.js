import React from 'react';
import UpperNav from '../UpperNav';
import Categories from '../Categories';
import './styles.scss';
const Main = () => {
    return(
        <div className="main">
            <UpperNav/>
            <div className="mainContent">
                <Categories/>
            </div>
        </div>
    );    
}

export default Main;
