import React, {useEffect} from "react";
import Nav from "../../components/Nav";
import SearchNav from '../../components/SearchNav';
import "./styles.scss";
export default function Library() {
  useEffect(() => {
    localStorage.setItem('active', 'library');
  }, []);
  return (
    <>
      <Nav />
      <div className="playlist">
            <SearchNav/>
            <div className="mainContent">
                <h1>Library</h1>
            </div>
        </div>
    </>
  );
}