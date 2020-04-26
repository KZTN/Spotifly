import React, {useEffect} from 'react';
import './styles.scss'
import Nav from '../../components/Nav'
import HomeNav from '../../components/HomeNav';
import Categories from '../../components/Categories';
import { isMobile } from "react-device-detect";

export default function Home() {
    useEffect(() => {
        localStorage.setItem('active', 'home');
    }, []);

    return (
        <>
        {isMobile? <></>: <Nav/>}
        <div className="main">
        {isMobile? <></>: <HomeNav/>}
            <div className="mainContent">
                <Categories/>
            </div>
        </div>
        </>
    );
}