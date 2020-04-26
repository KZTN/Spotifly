import React, {useEffect} from 'react';
import './styles.scss'
import Nav from '../../components/Nav'
import HomeNav from '../../components/HomeNav';
import Categories from '../../components/Categories';
export default function Home() {
    useEffect(() => {
        localStorage.setItem('active', 'home');
    }, []);

    return (
        <>
        <Nav/>
        <div className="main">
            <HomeNav/>
            <div className="mainContent">
                <Categories/>
            </div>
        </div>
        </>
    );
}