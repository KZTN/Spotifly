import React from 'react'
import {ReactComponent as TopbackbtnIcon} from '../../assets/buttons/topbackbtn.svg';
import {ReactComponent as TopfowardbtnIcon} from '../../assets/buttons/topfowardbtn.svg';
import './styles.scss'
const HomeNav = () => {
    return (
    <div className="homeNav">
        <div className="nav-buttons">
            <button><TopbackbtnIcon/></button>
            <button><TopfowardbtnIcon/></button>
        </div>
        <div className="nav-auth">
            <button className="btn-signup">SIGN UP</button>
            <button className="btn-login">LOG IN</button>
        </div>
    </div>);


}

export default HomeNav;