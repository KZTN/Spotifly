import React from "react";
import Nav from "../../components/Nav";
import SearchNav from '../../components/SearchNav';
import "./styles.scss";
export default function Search() {
  return (
    <>
      <Nav />
      <div className="browse">
            <SearchNav/>
            <div className="mainContent">
                <h1>Browse</h1>
            </div>
        </div>
    </>
  );
}