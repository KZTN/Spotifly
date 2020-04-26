import React from 'react'
import {ReactComponent as TopbackIcon} from '../../assets/buttons/topbackicon.svg';
import {ReactComponent as TopfowardIcon} from '../../assets/buttons/topfowardicon.svg';
import './styles.scss'
const HomeNav = () => {
    return (
    <div className="homeNav">
        <div className="nav-buttons">
            <button><TopbackIcon/></button>
            <button><TopfowardIcon/></button>
        </div>
        <div className="nav-auth">
            <button className="btn-signup">SIGN UP</button>
            <button className="btn-login">LOG IN</button>
        </div>
    </div>);


}

export default HomeNav;